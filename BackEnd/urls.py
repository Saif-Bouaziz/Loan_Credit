from django.contrib import admin

from django.urls import path
from django.urls import re_path,include 
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView, TokenVerifyView 
from django.views.generic import TemplateView

from . import views

urlpatterns = [ 
    path('api/token/', TokenObtainPairView.as_view()),
    path('api/token/refresh/', TokenRefreshView.as_view()),
    path('api/token/verify/', TokenVerifyView.as_view()),
    path('auth/user/', include('user.urls')),
    #path('api/demande/', include('credit.urls')),
    path('admin/', admin.site.urls),

    path('credit/', include('credit.urls')), 
    #ajout
    path('auth/', include('djoser.urls')), 
    path('auth/', include('djoser.urls.jwt')),
    #path('auth/', include('djoser.social.urls')),
    
] 
#ajout
#urlpatterns += [re_path(r'^.*', TemplateView.as_view(template_name=''))]

