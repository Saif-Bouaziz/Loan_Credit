from django.contrib import admin
<<<<<<< HEAD

from django.urls import path
from django.urls import re_path,include 
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView, TokenVerifyView 
from django.views.generic import TemplateView

=======
from django.urls import path,include,re_path
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView, TokenVerifyView
from django.views.generic import TemplateView
>>>>>>> master
from . import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [ 
    path('api/token/', TokenObtainPairView.as_view()),
    path('api/token/refresh/', TokenRefreshView.as_view()),
    path('api/token/verify/', TokenVerifyView.as_view()),
    path('auth/user/', include('user.urls')),
    #path('api/demande/', include('credit.urls')),
    path('admin/', admin.site.urls),
<<<<<<< HEAD

    path('credit/', include('credit.urls')), 
=======
    path('credit/', include('credit.urls')),
    
    
>>>>>>> master
    #ajout
    path('auth/', include('djoser.urls')), 
    path('auth/', include('djoser.urls.jwt')),
    #path('auth/', include('djoser.social.urls')),


    
]+static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)

#ajout
#urlpatterns += [re_path(r'^.*', TemplateView.as_view(template_name=''))]
<<<<<<< HEAD

=======
>>>>>>> master
