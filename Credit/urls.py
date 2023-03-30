from django.urls import path
from . import views

urlpatterns = [
    #path('predict/', views.prediction, name='prediction'),
    path('demande',views.demandeApi),
    path('demande/<int:id>',views.demandeApi)


]