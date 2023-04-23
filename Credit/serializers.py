from rest_framework import serializers
from .models import Demande,Credit


class DemandeSerializer(serializers.ModelSerializer):
    class Meta:
        model=Demande
        fields='__all__'
        ordering = ['-DemandeId']
        
class CreditSerializer(serializers.ModelSerializer):
    class Meta:
        model=Credit
        fields='__all__'
               
