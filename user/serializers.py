from rest_framework import serializers
from django.contrib.auth import get_user_model 
from djoser.serializers import UserCreateSerializer
User = get_user_model()


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id','name', 'email', 'is_banquier','is_agent')