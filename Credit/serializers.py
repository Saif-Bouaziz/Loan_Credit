from rest_framework import serializers
from credit.models import Demande




class DemandeSerializer(serializers.ModelSerializer):
    class Meta:
        model=Demande
        fields=('DemandeId',
'ClientId',
'first_name',
'last_name',
'email',
'person_age',
'cin',
'num_tel',
'marriage_status',
'job',
'person_emp_length',
'adress',
'person_home_ownership',
'region',
'city',
'code_postal',
'loan_intent',
'loan_amnt',
'loan_duration',
'loan_percent_income',
'loan_int_rate',
'loan_grade',
'person_income'
                )
