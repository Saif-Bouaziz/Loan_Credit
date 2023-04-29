from django.urls import path
from credit import views
urlpatterns = [
    path('create_demande', views.create_demande, name='create_demande'),
    path('banker/<int:identifiant>/', views.decision_demande, name='banker_methods'),
    path('demande',views.demandeApi),
    path('demande/<int:id>',views.demandeApi),
    path('create_demande/',views.create_demande),
    path('demandeApi',views.demandeApi),
    path('demandeApi/<int:id>',views.demandeApi),
    path('demande',views.demandeApi),
    path('demande/<int:id>',views.demandeApi),
    path('get_demande', views.get_demande,name='get_demande' ),
    path('status_counts', views.status_counts,name='status_counts' ),
    path('demande_status/<int:demande_id>/', views.demande_status,name='demande_status' ),
    path('update_prediction/<int:demande_id>/', views.update_prediction,name='update_prediction' ),
    path('delete/<int:demande_id>/', views.delete_demande,name='delete_demande' ),
    path('add_agent', views.add_agent,name='add_agent' ),
    path('get_banquier',views.get_banquier,name='get_banquier'),
    path('get_agent', views.get_agent,name='get_agent' ),
    path('get_users', views.get_users,name='get_users' ),
    path('delete_user/<int:id_user>/', views.delete_user,name='delete_users' ),
    path('last_six_demande/', views.LastSixDemandeList, name='last_six_demande'),
    path('client_count/', views.client_count, name='client_count'),
    path('agent_count/', views.agent_count, name='agent_count'),
    path('demande_count/', views.demande_count, name='demande_count'),
    path('credit_count/', views.credit_count, name='credit_count'),
    path('update_credit_counts/', views.update_credit_counts, name='update_credit_counts'),
    path('retrancher_montant/<int:id>/', views.retrancher_montant, name='retrancher_montant'),
    path('delete_agent/<int:id_agent>/', views.delete_agent,name='delete_agent' ),
    path('CreatedemandeApi',views.create_demande),
    path('get_credits',views.get_credits,name='get_credits'),
    path('delete_credit/<int:id_credit>/',views.delete_credit,name='delete_credit'),
    path('update_agent/<int:id_agent>/',views.update_agent,name='update_agent'),
    path('demande_count_date',views.demande_count_date,name='demande_count_date'),
    path('credit_count_date',views.credit_count_date,name='credit_count_date'),
    path('client_count_date',views.client_count_date,name='client_count_date'),
    path('agent_count_date',views.agent_count_date,name='agent_count_date'),
    path('upload_picture',views.upload_picture,name='upload_picture'),
    path('display_image',views.display_image,name='display_image'),



    

]