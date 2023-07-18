from django_filters.rest_framework import DjangoFilterBackend
from django.db.models import Q
from rest_framework.decorators import action
from django.shortcuts import render
from django.http import HttpResponse,HttpRequest
# Create your views here.


from rest_framework import permissions, status
from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet
from rest_framework import mixins, viewsets
from rest_framework.pagination import PageNumberPagination
from rest_framework.authentication import TokenAuthentication

from .models import  Movies, Favorite, Rating
from .serializers import  MovieSerializer, MovieListSerializer, CommentSerializer, FavoriteSerializer
from .service import MovieFilter    
from .forms import CommentForm

# def index(request):
#     search_movie = request.GET.get('q')
#     if search_movie:
#         movie  =Movies.objects.filter(Q(title__icontains= search_movie) | Q(description__icontains= search_movie))  
#     else:
#         movie = Movies.objects.none()
#     return render(request, {'movies': movie})



class MovieViewSet(mixins.RetrieveModelMixin,
                   mixins.CreateModelMixin,
                   mixins.UpdateModelMixin,
                   mixins.DestroyModelMixin,
                   viewsets.GenericViewSet):
    serializer_class = MovieSerializer
    queryset = Movies.objects.all()
    
    
    @action(detail=True, methods=['post'])
    def add_comment(self, request, pk=None):
        movie = self.get_object()
        serializer = CommentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(post=movie, user=request.user)
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)

    def create(self, request, *args, **kwargs):
        return super().create(request, *args, **kwargs)

    def index(request: HttpRequest) -> HttpResponse:
        movies = Movies.objects.all()
        for movie in movies:
            rating = Rating.objects.filter(movie=movie, user=request.user).first()
            movie.user_rating = rating.rating if rating else 0
        return render(request, "index.html", {"movies": movies})


    def get_permissions(self):
        if self.action in ['create', 'update', 'partial_update', 'destroy','add_comment']:
            authentication_classes = [TokenAuthentication]
            permission_classes = [permissions.IsAdminUser]
        elif self.action in ['add_comment','index']:
            authentication_classes = [TokenAuthentication]
            permission_classes = [permissions.IsAuthenticated]
        else:
            permission_classes = [permissions.AllowAny]
        return [permission() for permission in permission_classes]


class MovieListPagination(PageNumberPagination):
    page_size = 20
    page_size_query_param = 'page_size' #http://127.0.0.1:8000/movies/?page_size=2
    max_page_size = 1000

class MovieListSet(ModelViewSet):
    serializer_class = MovieListSerializer
    queryset = Movies.objects.all().order_by('year')
    filter_backends = (DjangoFilterBackend,)
    filterset_class = MovieFilter
    pagination_class =MovieListPagination

    def get_permissions(self):
        if self.action in ['create', 'update', 'partial_update', 'destroy']:
            permission_classes = [permissions.IsAdminUser]
        else:
            permission_classes = [permissions.AllowAny]
        return [permission() for permission in permission_classes]
    


class FavoriteViewSet(mixins.CreateModelMixin,
                      mixins.DestroyModelMixin,
                      viewsets.GenericViewSet):
    serializer_class = FavoriteSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return Favorite.objects.filter(user=self.request.user)

    @action(detail=True, methods=['post'])
    def add_to_favorite(self, request, pk=None):
        movie = Movies.objects.get(pk=pk)
        favorite, created = Favorite.objects.get_or_create(user=request.user, movie=movie)
        if created:
            serializer = self.get_serializer(favorite)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response({'detail': 'The movie is already in your favorites.'}, status=status.HTTP_400_BAD_REQUEST)

    @action(detail=True, methods=['post'])
    def remove_from_favorite(self, request, pk=None):
        movie = Movies.objects.get(pk=pk)
        favorite = Favorite.objects.get(user=request.user, movie=movie)
        favorite.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    
