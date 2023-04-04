from django.urls import path
from .views import ManageDemande
from credit import views

urlpatterns = [
    path('manage', ManageDemande.as_view(), name='manage_demande'),
    path('banker/<int:identifiant>/', views.decision_demande, name='banker_methods'),
    path('demande', views.get_demande,name='get_demande' ),
    path('delete/<int:demande_id>/', views.delete_demande,name='delete_demande' ),
    path('add_agent', views.add_agent,name='add_agent' ),
    path('get_agent', views.get_agent,name='get_agent' ),
    path('delete_agent/<int:id_agent>/', views.delete_agent,name='delete_agent' ),
    
    
]