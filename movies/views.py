from django.shortcuts import render

# Create your views here.

from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet
from rest_framework.generics import ListAPIView
from rest_framework import mixins, viewsets

from .models import Category, Movies
from .serializers import CategorySerializer, MovieSerializer, MovieListSerializer


@api_view(['GET'])
def categories(request):
    categories = Category.objects.all()
    serializer = CategorySerializer(categories, many=True)
    return Response(serializer.data)


# class MovieListView(APIView):
#     def get(self, request):
#         movies = Movies.objects.all()
#         movies_cut = []
#         serializer = MovieSerializer(movies, many=True)
#         for movie in serializer.data:
#             data = {
#                 'title': movie['title'],
#                 'poster': movie['poster'],
#             }
#             movies_cut.append(data)
#         return Response(movies_cut)


# class MovieDetailView(APIView):
#     def get(self, request, pk):
#         movie = Movies.objects.get(pk=pk)
#         serializer = MovieSerializer(movie)
#         return Response(serializer.data)


class MovieViewSet(mixins.RetrieveModelMixin,
                   mixins.CreateModelMixin,
                   mixins.UpdateModelMixin,
                   mixins.DestroyModelMixin,
                   viewsets.GenericViewSet):
    serializer_class = MovieSerializer
    queryset = Movies.objects.all()

class MovieListSet(ModelViewSet):
    serializer_class = MovieListSerializer
    queryset = Movies.objects.all()