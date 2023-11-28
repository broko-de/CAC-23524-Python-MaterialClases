from django.urls import path, re_path, include
from . import views

urlpatterns = [
    path('', views.index,name='inicio_app'),
    path('movies/', views.get_movies,name='getmovies_app'),
    path('create_movie/', views.create_movie),
    path('movies/<int:id>/', views.detail_movie),
    path('delete_movie/<int:id>/', views.detele_movie),
    path('update_movie/<int:id>/', views.update_movie),
]
