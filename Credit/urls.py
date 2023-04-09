from django.urls import path
from credit import views


urlpatterns = [
    path('create_demande', views.create_demande, name='create_demande'),
    path('banker/<int:identifiant>/', views.decision_demande, name='banker_methods'),
    path('demande', views.get_demande,name='get_demande' ),
    path('status_counts', views.status_counts,name='status_counts' ),
    path('demande_status/<int:demande_id>/', views.demande_status,name='demande_status' ),
    path('delete/<int:demande_id>/', views.delete_demande,name='delete_demande' ),
    path('add_agent', views.add_agent,name='add_agent' ),
    path('get_agent', views.get_agent,name='get_agent' ),
    path('get_users', views.get_users,name='get_users' ),
    path('delete_user/<int:id_user>/', views.delete_user,name='delete_users' ),
    path('last_six_demande/', views.LastSixDemandeList, name='last_six_demande'),
    path('client_count/', views.client_count, name='client_count'),
    path('agent_count/', views.agent_count, name='agent_count'),
    path('demande_count/', views.demande_count, name='demande_count'),

    path('delete_agent/<int:id_agent>/', views.delete_agent,name='delete_agent' ),
    

    
]