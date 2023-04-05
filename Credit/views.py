from rest_framework.views import APIView
from django.shortcuts import render
#from user.models import UserAccount
from django.http import JsonResponse,HttpResponse,HttpResponseBadRequest
#from django.contrib.auth.mixins import LoginRequiredMixin
from django.contrib.auth.decorators import login_required



from rest_framework import status, permissions
from rest_framework.response import Response
from user.models import UserAccount
from .models import Demande
from .serializers import DemandeSerializer


from rest_framework.parsers import JSONParser


import numpy as np
import pickle
import json


with open('final_XGBmodel.pkl', 'rb') as f:
    model = pickle.load(f)


# Create your views here.
def demandeApi(request,id=0):
            if request.method=='GET':
                demande=Demande.objects.all()
                demande_serializer=DemandeSerializer(demande,many=True)
                return JsonResponse(demande_serializer.data, safe=False )
            elif request.method=='PATCH':
                demande=Demande.objects.get(DemandeId=id)
                demande_serializer=DemandeSerializer(demande,data=JSONParser().parse(request),partial=True)
                if demande_serializer.is_valid():
                    demande_serializer.save()
                    return JsonResponse("Updated Successfully!", safe=False)
                return JsonResponse("Failed to Update", safe=False)


with open('final_XGBmodel.pkl', 'rb') as f:
    model = pickle.load(f)
    
class ManageDemande(APIView):
    def create_demande(request):
        if request.method == 'POST':
            #user= request.user
            #ClientId=user.id
            ClientId=1
            data = json.loads(request.body)
            address_form_data = data['addressFormData']
            payment_form_data = data['paymentFormData']
            first_name=payment_form_data.get('first_name')
            last_name=payment_form_data.get('last_name')
            email=payment_form_data.get('email')
            person_age=payment_form_data.get('person_age')
            cin=payment_form_data.get('cin')
            num_tel=payment_form_data.get('num_tel')
            marriage_status=payment_form_data.get('marriage_status')
            job=payment_form_data.get('job')
            person_emp_length=payment_form_data.get('person_emp_length')
            adress=payment_form_data.get('adress')
            person_home_ownership=payment_form_data.get('person_home_ownership')
            region=payment_form_data.get('region')
            city=payment_form_data.get('city')
            cod_postal=payment_form_data.get('code_postal')
            loan_intent=address_form_data.get('loan_intent')
            loan_amnt=address_form_data.get('loan_amnt')
            loan_duration=address_form_data.get('loan_duration')
            loan_percent_income=address_form_data.get('loan_percent_income')
            loan_int_rate=address_form_data.get('loan_int_rate')
            loan_grade="A"
            person_income=address_form_data.get('person_income')
            demande=Demande.objects.using('credit').create(
                        ClientId=ClientId, first_name=first_name, last_name=last_name,
                        email=email, person_age=person_age, cin=cin, num_tel=num_tel,
                        marriage_status=marriage_status,job=job,person_emp_length=person_emp_length,
                        adress=adress,person_home_ownership=person_home_ownership,region=region,
                        city=city,code_postal=cod_postal,loan_intent=loan_intent,loan_amnt=loan_amnt,
                        loan_duration=loan_duration,loan_percent_income=loan_percent_income,
                        loan_int_rate=loan_int_rate,loan_grade=loan_grade,person_income=person_income
                     )
        
            return JsonResponse({'success': True})
        return JsonResponse({'error': 'Invalid request method'})