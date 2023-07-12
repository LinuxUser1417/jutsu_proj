from django.urls import path

from movies import views

urlpatterns = [
    path('categories/', views.categories, name='categories-list'),
    # path('movies_list/', views.MoviesList.as_view(),name= 'movie-list'),
    path('movies/', views.MovieListView.as_view(), name='movie-list'),
    path('movies/<int:pk>/', views.MovieDetailView.as_view(), name='movie-detail'),
]
