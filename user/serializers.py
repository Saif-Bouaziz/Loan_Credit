"""
from rest_framework import serializers
from django.contrib.auth import get_user_model 
from djoser.serializers import UserCreateSerializer
User = get_user_model()


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id','name', 'email', 'is_banquier','is_agent') 
""" 
from rest_framework import serializers
from django.contrib.auth import get_user_model
User = get_user_model()
"""

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id','name', 'email') 
"""  

class UserSerializer(serializers.ModelSerializer):
    """
    Currently unused in preference of the below.
    """
    email = serializers.EmailField(required=True)
    name = serializers.CharField(required=True)
    password = serializers.CharField(min_length=8, write_only=True) 


    class Meta:
        model = User
        fields = ('email', 'name', 'password')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        password = validated_data.pop('password', None)

        # as long as the fields are the same, we can just use this
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance

