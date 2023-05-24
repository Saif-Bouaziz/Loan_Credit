from rest_framework.views import APIView
from rest_framework.decorators import api_view, permission_classes,renderer_classes
from rest_framework.renderers import JSONRenderer

from django.shortcuts import render
from django.http import JsonResponse,HttpResponse,HttpResponseBadRequest
from django.contrib.auth.decorators import login_required
from django.shortcuts import get_object_or_404
from rest_framework.permissions import IsAuthenticated
from django.core.cache import cache
from django.views.decorators.http import require_http_methods

from rest_framework import status, permissions,generics
from rest_framework.response import Response
from user.models import UserAccount
from .models import Demande,Credit
from .serializers import DemandeSerializer,CreditSerializer

from rest_framework.permissions import BasePermission


from django.shortcuts import render
from rest_framework.parsers import JSONParser
from django.core.mail import send_mail

import numpy as np
import pickle
import json
import requests

import base64


with open('final_XGBmodel.pkl', 'rb') as f:
    model = pickle.load(f)
    
def update_nb_email(request,id):
    demande=Demande.objects.using('credit').get(DemandeId=id)
    email=demande.email
    user=UserAccount.objects.using('users').get(email=email)
    user.nb_mail +=1
    user.save()
    return JsonResponse({'success': True, 'message': 'nbr mail incrémenté '})                   

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_nb_email(request):
    user_co=request.user
    user=UserAccount.objects.using('users').get(email=user_co.email)
    nbr=user.nb_mail
    return JsonResponse({'nbr':nbr})  

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def reset_nb_email(request):
    if request.method=='POST':
        user_co=request.user
        user=UserAccount.objects.using('users').get(email=user_co.email) 
        user.nb_mail=0
        user.save()  
        return JsonResponse({'success': True, 'message':'Pas de nouveaux mails','nbr':0})
    return JsonResponse("Failed to Reset")
             

    

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
                    if  demande.status=='acceptée':
                        credit=Credit.objects.using('credit').create(demande=demande,montant_principal=demande.loan_amnt,montant_restant=demande.loan_amnt,
                              taux=demande.loan_int_rate,mensualite=demande.loan_duration)
                        credit.save()
                        return JsonResponse({'success': True, 'message': 'Crédit créé avec succès!'})
                    credit_exists = Credit.objects.filter(demande=demande).exists()
                    if credit_exists and  demande.status=='refusée' :
                        credit_err=Credit.objects.filter(demande=demande)
                        credit_err.delete()
                        return JsonResponse({'success': True, 'message': 'Crédit supprimé !! '}) 
                    return JsonResponse("Updated Successfully!", safe=False)
                return JsonResponse("Failed to Update", safe=False)

import random
def generate_agent(request):
        agents=UserAccount.objects.filter(is_agent=True)
        list_id=[]
        for agent in agents:
            list_id.append(agent.id)
        if len(list_id)==0:
            return JsonResponse("there is no agents", safe=False)
        agent_associe = random.choice(list_id)
        return agent_associe

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def create_demande(request):
        if request.method == 'POST':
            user= request.user
            client=UserAccount.objects.get(email=user.email)
            ClientId=client.id
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
            person_income=address_form_data.get('person_income')
            image4=address_form_data.get('image4')
            AgentMail=address_form_data.get('AgentMail')
            img_cin=address_form_data.get('img_cin')
            img_avis_imposition=address_form_data.get('img_avis_imposition')
            img_bulletins_salaire=address_form_data.get('img_bulletins_salaire')
            img_Releves_compte_banque=address_form_data.get('img_Releves_compte_banque')
            img_justificatif_domicile_actuel=address_form_data.get('img_justificatif_domicile_actuel')
            agent_associe = generate_agent(request)

            demande=Demande.objects.using('credit').create(   
                ClientId=ClientId, first_name=first_name, last_name=last_name,
                        email=email, person_age=person_age, cin=cin, num_tel=num_tel,
                        marriage_status=marriage_status,job=job,person_emp_length=person_emp_length,
                        adress=adress,person_home_ownership=person_home_ownership,region=region,
                        city=city,code_postal=cod_postal,loan_intent=loan_intent,loan_amnt=loan_amnt,
                        loan_duration=loan_duration,loan_percent_income=loan_percent_income,
                        loan_int_rate=loan_int_rate,person_income=person_income,image4=image4,
                        img_cin=img_cin,img_avis_imposition=img_avis_imposition,img_bulletins_salaire=img_bulletins_salaire,
                        img_Releves_compte_banque=img_Releves_compte_banque,img_justificatif_domicile_actuel=img_justificatif_domicile_actuel,
                        agent_associé=agent_associe)
        
            return JsonResponse({'success': True,'agent':demande.agent_associé})
        return JsonResponse({'error': 'Invalid request method'})

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_agent_demande(request):
    user_co=request.user
    agent=UserAccount.objects.using('users').get(email=user_co.email) 
    demande_agent = Demande.objects.filter(agent_associé=agent.id).values("DemandeId","first_name","last_name","email",
                                        "person_income","loan_intent","loan_amnt","decision")
    demande_associe=list(demande_agent)
    if demande_agent.exists():
        return JsonResponse({'success': True,'demande_agent':demande_associe},safe=False)
    return JsonResponse({'message': 'there is no demand for you oopsie'})


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
    data = Demande.objects.filter(decision="Accepted").values("DemandeId", "ClientId","first_name","last_name","person_age",
                                  "person_emp_length","person_home_ownership","loan_intent",
                                  "loan_amnt","loan_percent_income","loan_int_rate",
                                  "loan_grade","person_income","status","created","prediction","email")
    return JsonResponse(list(data), safe=False)


def delete_demande(request, demande_id):
    try:
        demande = Demande.objects.get(DemandeId=demande_id)
        demande.delete()
        return JsonResponse({'success': True})
    except Demande.DoesNotExist:
        return JsonResponse({'success': False, 'message': 'Demande not found'})

def update_prediction(request, demande_id):
    if request.method == 'PATCH':
        demande = Demande.objects.get (DemandeId=demande_id)
        data = json.loads(request.body)
        demande.prediction = data['prediction']
        demande.save()
        return JsonResponse({'prediction': demande.prediction})

    return JsonResponse({'error': 'Invalid request method'})
    
def demande_status(request, demande_id):
    if request.method == 'POST':
        try:
            demande = Demande.objects.using('credit').get(DemandeId=demande_id)
            data = json.loads(request.body)
            status = data['status']
            demande.status = status
            demande.save()
            if status=='acceptée':
                credit=Credit.objects.using('credit').create(demande=demande,montant_principal=demande.loan_amnt,montant_restant=demande.loan_amnt,
                              taux=demande.loan_int_rate,mensualite=demande.loan_duration)
                credit.save()
                return JsonResponse({'success': True, 'message': 'Crédit créé avec succès!'})
            credit_exists = Credit.objects.filter(demande=demande).exists()
            if credit_exists and status=='refusée' :
                credit_err=Credit.objects.filter(demande=demande)
                credit_err.delete()
                return JsonResponse({'success': True, 'message': 'Crédit supprimé !! '})   
            return JsonResponse({'status': status})
        except Demande.DoesNotExist:
            return JsonResponse({'error': 'Demande not found'}, status=404)
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=500)


def status_counts(request):
    demandes = Demande.objects.using('credit').filter(decision="Accepted").values('status')
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
    last_six_demande = Demande.objects.using('credit').filter(status='En cours',decision="Accepted").order_by('-DemandeId')[:6]
    serialized_last_six_demande = DemandeSerializer(last_six_demande, many=True).data
    cache.set('last_six_demande', serialized_last_six_demande)
    return Response(serialized_last_six_demande)



def client_count(request):
    client_count = UserAccount.objects.filter(is_agent=False, is_banquier=False).count()
    return JsonResponse(client_count,safe=False)

def client_count_date(request):
    client_count_date = UserAccount.objects.filter(is_agent=False, is_banquier=False).values('date_inscription').annotate(count=Count('id'))
    counts_dict = {}
    for client_count in client_count_date:
        date_string = client_count['date_inscription'].strftime("%Y-%m-%d %H:%M:%S")
        count = client_count['count']
        counts_dict[date_string] = count
    return JsonResponse(counts_dict)

def agent_count(request):
    agent_count = UserAccount.objects.filter(is_agent=True).count()
    return JsonResponse(agent_count,safe=False)

def agent_count_date(request):
    agent_count_date = UserAccount.objects.filter(is_agent=True, is_banquier=False).values('date_inscription').annotate(count=Count('id'))
    counts_dict = {}
    for agent_count in agent_count_date:
        date_string = agent_count['date_inscription'].strftime("%Y-%m-%d %H:%M:%S")
        count = agent_count['count']
        counts_dict[date_string] = count
    return JsonResponse(counts_dict)

def demande_count(request):
    demande_count = Demande.objects.filter(decision="Accepted").count()
    return JsonResponse(demande_count,safe=False)

def demande_count_date(request):
    demande_count_date = Demande.objects.filter(decision="Accepted").values('created').annotate(count=Count('DemandeId'))
    counts_dict = {}
    for demande_count in demande_count_date:
        date_string = demande_count['created'].strftime("%Y-%m-%d %H:%M:%S")
        count = demande_count['count']
        counts_dict[date_string] = count
    return JsonResponse(counts_dict)
       
from django.contrib.auth.hashers import make_password

def add_agent(request): 
    if request.method == 'POST':
        data = json.loads(request.body)
        name=data['name']
        email=data['email']
        password=data['password']
        hashed_password = make_password(password)
        agent=UserAccount.objects.using('users').create(name=name, email=email,password=hashed_password,is_active=True,is_agent=True)
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

from django.views.decorators.http import require_http_methods
   
@require_http_methods(["PUT"])
def update_agent(request, id_agent):
    agent = UserAccount.objects.using('users').get(id=id_agent)
    data = json.loads(request.body.decode("utf-8"))
    new_email = data.get('email')
    
    if not new_email:
        # new_email is empty or null, handle the error here
        return JsonResponse({'success': False, 'error': 'New email is empty or null'})

    agent.email = new_email
    agent.save()
    return JsonResponse({'success': True})
    
    
def get_users(request):
    
    users = list(UserAccount.objects.using('users').filter(is_banquier=False,is_agent=False).values())
    # Add a new key 'user_type' to each user object to indicate whether they are an agent or client
    return JsonResponse(users, safe=False)

def get_banquier(request):  
    banquier =UserAccount.objects.using('users').filter(is_banquier=True).values()
    banquier_list = list(banquier)

    return JsonResponse(banquier_list, safe=False)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def acces_dashboard(request):
    user_co=request.user
    banquier_email=UserAccount.objects.filter(is_banquier=True).values_list("email", flat=True).first()
    if user_co.email ==banquier_email:
        return JsonResponse({'succes':True,'message':'you have the acces to the dashboard'})
    return JsonResponse({'message':'taarafha niniiiniiiii'})

    

def delete_user(request, id_user):
    try:
        user = UserAccount.objects.using('users').get(id=id_user)
        user.delete()
        return JsonResponse({'success': True})
    except UserAccount.DoesNotExist:
        return JsonResponse({'success': False, 'message': 'Utilisateur n existe pas !'})
    
def get_credits(request):
    data = Credit.objects.values("IdCredit","montant_principal","montant_restant","taux","mensualite","demande__last_name","demande__first_name",
                                 "demande__person_income","demande__loan_intent","demande__loan_percent_income","demande__email","demande__DemandeId")
    return JsonResponse(list(data), safe=False)

def delete_credit(request,id_credit):
    try :
        credit=Credit.objects.get(IdCredit=id_credit)
        credit.delete()
        return JsonResponse({'success': True})
    except Credit.DoesNotExist:
        return JsonResponse({'success': False, 'message': 'Credit not found'})
    

from django.views.decorators.http import require_http_methods
import re


@require_http_methods(["PATCH"])
def retrancher_montant(request,id):
    credit=Credit.objects.using('credit').get(IdCredit=id)
    demande=credit.demande
    salaire_mensuel=credit.montant_principal / 12
    restant=credit.montant_restant
    ancienne_mensualite=credit.mensualite
    mensualite_courante=ancienne_mensualite
    if ( mensualite_courante != "0m" and restant !=0) :
        retrancher=(salaire_mensuel * demande.loan_percent_income)/100
        mensualite_courante =str(int(re.findall('\d+',ancienne_mensualite)[0]) - 1) + "m"
        restant=restant-retrancher
        credit.montant_restant = restant
        credit.mensualite= mensualite_courante
        credit.save()
        return JsonResponse({'success': True, 'message': 'opération faite avec succes', 'montant_restant': restant,'mensualite_courante':mensualite_courante})
    return JsonResponse({'success': False, 'message': 'opération non valide !'})

import requests
from django.db.models import Count

def update_credit_counts(request):
    credit_counts = Credit.objects.values('montant_principal').annotate(count=Count('IdCredit'))
    counts_dict = {}
    for credit_count in credit_counts:
        credit_amount = credit_count['montant_principal']
        count = credit_count['count']
        counts_dict[credit_amount] = count
    return JsonResponse(counts_dict)


def credit_count(request):
    credit_count = Credit.objects.count()
    return JsonResponse(credit_count,safe=False)

def credit_count_date(request):
    credit_count_date = Credit.objects.values('affected').annotate(count=Count('IdCredit'))
    counts_dict = {}
    for credit_count in credit_count_date:
        date_string = credit_count['affected'].strftime("%Y-%m-%d %H:%M:%S")
        count = credit_count['count']
        counts_dict[date_string] = count
    return JsonResponse(counts_dict)


from django.core.files.storage import default_storage
from django.conf import settings


def upload_picture(request):
    picture = request.FILES['picture']
    filename = default_storage.save('picture/' + picture.name, picture)
    picture_url = settings.MEDIA_URL + filename
    banquier=UserAccount.objects.get(is_banquier=True)
    banquier.image = picture_url
    banquier.save()
    return JsonResponse({'success': True, 'message': 'opération faite avec succes', 'picture': picture_url})

def display_image(request):
    banquier=UserAccount.objects.get(is_banquier=True)
    image=banquier.image
    return JsonResponse({'success': True, 'message': 'opération faite avec succes', 'image':image},safe=False)

    





    


    
    
    

        
