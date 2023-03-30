from django.urls import path
from .views import ManageDemande

urlpatterns = [
    path('manage', ManageDemande.as_view(), name='manage_demande'),
    #path('predict/', views.prediction, name='prediction'),
    
]