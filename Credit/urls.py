from django.urls import path
from .views import ManageDemande
from credit import views

urlpatterns = [
    path('manage', ManageDemande.as_view(), name='manage_demande'),
    path('banker/<int:identifiant>/', views.decision_demande, name='banker_methods'),
    path('demande',views.demandeApi),
    path('demande/<int:id>',views.demandeApi),
    path('create_demande/',views.create_demande)
    
]