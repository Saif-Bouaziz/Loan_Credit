"""
from django.urls import path
from .views import RegisterView, RetrieveUserView
from .views import AllUsersView , AllBankersView




urlpatterns = [
    path('register', RegisterView.as_view()),
    path('me', RetrieveUserView.as_view()), 
    path('allusers/', AllUsersView.as_view()),  
    path('allBankers/', AllBankersView.as_view()),
    
] 
""" 
from django.urls import path
from .views import RegisterView #, RetrieveUserView
#from .views import AllUsersView , AllBankersView 




urlpatterns = [
    path('register', RegisterView.as_view()),
    #path('me', RetrieveUserView.as_view()), 
    #path('allusers/', AllUsersView.as_view()),  
    #path('allBankers/', AllBankersView.as_view()), 

    
]
