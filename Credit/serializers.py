from rest_framework import serializers
from .models import Demande

class DemandeSerializer(serializers.ModelSerializer):
    class Meta:
        model=Demande
        fields='__all__'
        ordering = ['-DemandeId']
               
