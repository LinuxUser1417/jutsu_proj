from django.urls import path
from rest_framework.routers import DefaultRouter

from movies import views


router = DefaultRouter()
router.register('movies', views.MovieViewSet)

urlpatterns = [
    path('movies/', views.MovieListSet.as_view({'get': 'list'})),
    # path('movies/<int:pk>/', views.MovieViewSet.as_view()),
    # path('categories/', views.categories, name='categories-list'),
    # path('movies_list/', views.MoviesList.as_view(),name= 'movie-list'),
    # path('movies/', views.MovieListView.as_view(), name='movie-list'),
    # path('movies/<int:pk>/', views.MovieDetailView.as_view(), name='movie-detail'),
]


urlpatterns += router.urls
