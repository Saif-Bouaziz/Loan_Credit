from django.urls import path
#from .views import ManageDemande
from credit import views

urlpatterns = [
    #path('predict/', views.prediction, name='prediction'),
    
    path('demande',views.demandeApi),
    path('demande/<int:id>',views.demandeApi),
    path('create_demande/',views.create_demande)

    #path('manage',ManageDemande.as_view())
    
]