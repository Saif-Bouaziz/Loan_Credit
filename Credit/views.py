from rest_framework.views import APIView
from rest_framework.decorators import api_view, permission_classes
from django.shortcuts import render
from django.http import JsonResponse,HttpResponse,HttpResponseBadRequest
from django.contrib.auth.decorators import login_required
from django.shortcuts import get_object_or_404
from rest_framework.permissions import IsAuthenticated
from django.core.cache import cache

from rest_framework import status, permissions,generics
from rest_framework.response import Response
from user.models import UserAccount
from .models import Demande
from .serializers import DemandeSerializer



from django.shortcuts import render
from rest_framework.parsers import JSONParser


import numpy as np
import pickle
import json
import requests

import base64


with open('final_XGBmodel.pkl', 'rb') as f:
    model = pickle.load(f)


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
            #user= request.user
            #ClientId=user.id
        ClientId=1
        
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
            image2=address_form_data.get('image2')
            demande=Demande.objects.using('credit').create(
                        ClientId=ClientId, first_name=first_name, last_name=last_name,
                        email=email, person_age=person_age, cin=cin, num_tel=num_tel,
                        marriage_status=marriage_status,job=job,person_emp_length=person_emp_length,
                        adress=adress,person_home_ownership=person_home_ownership,region=region,
                        city=city,code_postal=cod_postal,loan_intent=loan_intent,loan_amnt=loan_amnt,
                        loan_duration=loan_duration,loan_percent_income=loan_percent_income,
                        loan_int_rate=loan_int_rate,loan_grade=loan_grade,person_income=person_income,image2=image2
                     )
        
            return JsonResponse({'success': True})
        return JsonResponse({'error': 'Invalid request method'})


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
            image4=address_form_data.get('image4')
            img_cin=address_form_data.get('img_cin')
            img_avis_imposition=address_form_data.get('img_avis_imposition')
            img_bulletins_salaire=address_form_data.get('img_bulletins_salaire')
            img_Releves_compte_banque=address_form_data.get('img_Releves_compte_banque')
            img_justificatif_domicile_actuel=address_form_data.get('img_justificatif_domicile_actuel')
            demande=Demande.objects.using('credit').create(   
                ClientId=ClientId, first_name=first_name, last_name=last_name,
                        email=email, person_age=person_age, cin=cin, num_tel=num_tel,
                        marriage_status=marriage_status,job=job,person_emp_length=person_emp_length,
                        adress=adress,person_home_ownership=person_home_ownership,region=region,
                        city=city,code_postal=cod_postal,loan_intent=loan_intent,loan_amnt=loan_amnt,
                        loan_duration=loan_duration,loan_percent_income=loan_percent_income,
                        loan_int_rate=loan_int_rate,loan_grade=loan_grade,person_income=person_income,image4=image4,
                        img_cin=img_cin,img_avis_imposition=img_avis_imposition,img_bulletins_salaire=img_bulletins_salaire,
                        img_Releves_compte_banque=img_Releves_compte_banque,img_justificatif_domicile_actuel=img_justificatif_domicile_actuel
                     )
        
            return JsonResponse({'success': True})
        return JsonResponse({'error': 'Invalid request method'})

from rest_framework.permissions import BasePermission
from django.contrib.auth.decorators import user_passes_test

def decision_demande(request,identifiant): 

    #if request.user.is_banquier:
       #return JsonResponse({'error': 'Unauthorized access'}, status=401)
    demande_data = Demande.objects.using('credit').get(DemandeId=identifiant)

    person_age=float(demande_data.person_age)
    person_income=float(demande_data.person_income)
    person_emp_length=float(demande_data.person_emp_length)
    loan_amnt=float(demande_data.loan_amnt)
    loan_int_rate=float(demande_data.loan_int_rate)
    loan_percent_income=float(demande_data.loan_percent_income)

    home_ownership_map = {"RENT": 0, "OWN": 1, "MORTGAGE": 2, "OTHER":3}
    person_home_ownership = home_ownership_map.get(demande_data.person_home_ownership, 3)
    
    loan_intent_map = {
                "PERSONAL": 0, "EDUCATION": 1, "MEDICAL": 2, "VENTURE": 3,
                "HOMEIMPROVEMENT": 4, "DEBTCONSOLIDATION":5
                        }
    loan_intent = loan_intent_map.get(demande_data.loan_intent, 5)
    
    loan_grade_map = {"A": 0, "B": 1, "C": 2, "D":3, "E": 4, "F": 5, "G":6}
    loan_grade = loan_grade_map.get(demande_data.loan_grade, 6)
            
    data = np.array([[person_age, person_income, person_home_ownership, person_emp_length, loan_intent, loan_grade,
                      loan_amnt, loan_int_rate, loan_percent_income]])

    prediction = int(model.predict(data)[0])
    
    response_data = str(prediction)

    return HttpResponse(response_data, content_type='text/plain')


    
def get_demande(request):
    data = Demande.objects.values("DemandeId", "ClientId","first_name","last_name","person_age",
                                  "person_emp_length","person_home_ownership","loan_intent",
                                  "loan_amnt","loan_percent_income","loan_int_rate",
                                  "loan_grade","person_income","status")
    return JsonResponse(list(data), safe=False)


def delete_demande(request, demande_id):
    try:
        demande = Demande.objects.get(DemandeId=demande_id)
        demande.delete()
        return JsonResponse({'success': True})
    except Demande.DoesNotExist:
        return JsonResponse({'success': False, 'message': 'Demande not found'})
    
def demande_status(request, demande_id):
    if request.method == 'POST':
        try:
            demande = Demande.objects.using('credit').get(DemandeId=demande_id)
            data = json.loads(request.body)
            status = data['status']
            demande.status = status
            demande.save()
            return JsonResponse({'status': status})
        except Demande.DoesNotExist:
            return JsonResponse({'error': 'Demande not found'}, status=404)
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=500)


def status_counts(request):
    demandes = Demande.objects.all().values('status')
    counts = {'refusée': 0, 'acceptée': 0}
    for demande in demandes:
        status = demande['status']
        if status == 'refusée':
            counts['refusée'] += 1
        elif status == 'acceptée':
            counts['acceptée'] += 1
    return JsonResponse(counts) 


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def LastSixDemandeList(request):
    cached_data = cache.get('last_six_demande')
    if cached_data:
        return Response(cached_data)
    last_six_demande = Demande.objects.order_by('-DemandeId')[:6]
    serialized_last_six_demande = DemandeSerializer(last_six_demande, many=True).data
    cache.set('last_six_demande', serialized_last_six_demande)
    return Response(serialized_last_six_demande)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def client_count(request):
    cached_data = cache.get('client_count')
    if cached_data:
        return Response(cached_data)
    client_count = UserAccount.objects.exclude(is_agent=True, is_banquier=True).count()
    cache.set('client_count', client_count, timeout=None)
    return Response({'count': client_count})

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def agent_count(request):
    cached_data = cache.get('agent_count')
    if cached_data:
        return Response(cached_data)
    agent_count = UserAccount.objects.exclude(is_agent=False).count()
    cache.set('agent_count', agent_count, timeout=None)
    return Response({'count': agent_count})

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def demande_count(request):
    cached_data = cache.get('demande_count')
    if cached_data:
        return Response(cached_data)
    demande_count = Demande.objects.count()
    cache.set('demande_count', demande_count, timeout=None)
    return Response({'count': demande_count})
       

def add_agent(request): 
    if request.method == 'POST':
        data = json.loads(request.body)
        name=data['name']
        email=data['email']
        password=data['password']
        is_agent=data['is_agent']
        agent=UserAccount.objects.using('users').create(name=name, email=email,password=password)
        agent.is_agent=is_agent
        agent.save()
        return JsonResponse({'success': True})
    return JsonResponse({'error': 'Invalid request method'})

def get_agent(request):
    agents=UserAccount.objects.using('users').filter(is_agent=True).values()
    return JsonResponse(list(agents), safe=False)

def delete_agent(request, id_agent):
    try:
        agent = UserAccount.objects.using('users').get(id=id_agent)
        agent.delete()
        return JsonResponse({'success': True})
    except Demande.DoesNotExist:
        return JsonResponse({'success': False, 'message': 'Demande not found'})
    
def get_users(request):
    
    users = list(UserAccount.objects.using('users').filter(is_banquier=False).values())
    # Add a new key 'user_type' to each user object to indicate whether they are an agent or client
    for user in users:
        user['user_type'] = 'agent' if user['is_agent'] else 'client'
    return JsonResponse(users, safe=False)

def delete_user(request, id_user):
    try:
        user = UserAccount.objects.using('users').get(id=id_user)
        user.delete()
        return JsonResponse({'success': True})
    except UserAccount.DoesNotExist:
        return JsonResponse({'success': False, 'message': 'Utilisateur n existe pas !'})

        
        
                