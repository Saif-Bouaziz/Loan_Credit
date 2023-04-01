from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Demande
from .serializers import DemandeSerializer


from django.shortcuts import render
from rest_framework.parsers import JSONParser
from django.http import JsonResponse,HttpResponse


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



def create_demande(request):
        if request.method == 'POST':
            data = json.loads(request.body)
            address_form_data = data['addressFormData']
            payment_form_data = data['paymentFormData']
            ClientId=1
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


"""
class ManageDemande(APIView):
    def get(request,id=0):
        demande=Demande.objects.all()
        demande_serializer=DemandeSerializer(demande,many=True)
        return JsonResponse(demande_serializer.data, safe=False )


    def patch(request,id=0):
        demande=Demande.objects.get(DemandeId=id)
        demande_serializer=DemandeSerializer(demande,data=JSONParser().parse(request),partial=True)
        if demande_serializer.is_valid():
            demande_serializer.save()
            return JsonResponse("Updated Successfully!", safe=False)
        return JsonResponse("Failed to Update", safe=False)

    def post(request):
        data = json.loads(request.body)
        address_form_data = data['addressFormData']
        payment_form_data = data['paymentFormData']
        ClientId=1
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
"""
def prediction(request):
    demande_data = Demande.objects.using('credit').all().values('person_age','person_income', 'person_home_ownership',
                                                                'person_emp_length','loan_intent', 'loan_grade', 'loan_amnt',
                                                                'loan_int_rate','loan_percent_income'
                                                                )
    for obj in demande_data:
        person_age=float(obj['person_age'])
        person_income=float(obj['person_income'])
        home=obj['person_home_ownership']
        person_emp_length=float(obj['person_emp_length'])
        intent=obj['loan_intent']
        grade=obj['loan_grade']
        loan_amnt=float(obj['loan_amnt'])
        loan_int_rate=float(obj['loan_int_rate'])
        loan_percent_income=float(obj['loan_percent_income'])
    if home=="RENT":
        person_home_ownership =0
        person_home_ownership=float(person_home_ownership)
    elif home=="OWN":
        person_home_ownership =1
        person_home_ownership=float(person_home_ownership)
    elif home=="MORTGAGE":
        person_home_ownership =2
        person_home_ownership=float(person_home_ownership)
    else:
        person_home_ownership =3
        person_home_ownership=float(person_home_ownership)
        
    if  intent=="PERSONAL":
        loan_intent=0
        loan_intent=float(loan_intent)
    elif intent=="EDUCATION":
        loan_intent=1
        loan_intent=float(loan_intent)
    elif intent=="MEDICAL":
        loan_intent=2
        loan_intent=float(loan_intent)
    elif intent=="VENTURE":
        loan_intent=3
        loan_intent=float(loan_intent)
    elif intent=="HOMEIMPROVEMENT":
        loan_intent=4
        loan_intent=float(loan_intent)
    else:
        loan_intent=5 
        loan_intent=float(loan_intent)
    
    if grade=="A":
        loan_grade=0
        loan_grade=float(loan_grade)

        
    data = np.array([[person_age, person_income, person_home_ownership, person_emp_length, loan_intent, loan_grade,
                      loan_amnt, loan_int_rate, loan_percent_income]])
    pred = model.predict(data)
    prediction= pred.tolist()
    
    return HttpResponse(json.dumps(prediction), content_type='application/json')
     


