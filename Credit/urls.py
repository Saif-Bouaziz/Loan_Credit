from django.urls import path
from . import views

urlpatterns = [
    path('create_demande/', views.create_demande, name='create_demande'),
    path('predict/', views.prediction, name='prediction'),
    
]