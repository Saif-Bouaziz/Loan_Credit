from rest_framework.views import APIView
<<<<<<< HEAD
from rest_framework.response import Response
from rest_framework import status
=======
from django.shortcuts import render
#from user.models import UserAccount
from django.http import JsonResponse,HttpResponse,HttpResponseBadRequest
#from django.contrib.auth.mixins import LoginRequiredMixin
from django.contrib.auth.decorators import login_required



from rest_framework import status, permissions
from rest_framework.response import Response
from user.models import UserAccount
>>>>>>> master
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
<<<<<<< HEAD
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
=======
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
>>>>>>> master
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
            verified="en_cours"
>>>>>>> master
>>>>>>> master
            person_income=address_form_data.get('person_income')
            demande=Demande.objects.using('credit').create(
                        ClientId=ClientId, first_name=first_name, last_name=last_name,
                        email=email, person_age=person_age, cin=cin, num_tel=num_tel,
                        marriage_status=marriage_status,job=job,person_emp_length=person_emp_length,
                        adress=adress,person_home_ownership=person_home_ownership,region=region,
                        city=city,code_postal=cod_postal,loan_intent=loan_intent,loan_amnt=loan_amnt,
                        loan_duration=loan_duration,loan_percent_income=loan_percent_income,
<<<<<<< HEAD
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
=======
                        loan_int_rate=loan_int_rate,loan_grade=loan_grade,person_income=person_income,
                     )
        
            return JsonResponse({'success': True})
        return JsonResponse({'error': 'Invalid request method'})
    
    def retrieve_values(self, data):

        first_name=data['first_name']
        last_name=data['last_name']
        email=data['email']
        person_age=data['person_age']
        cin=data['cin']
        num_tel=data['num_tel']
        marriage_status=data['marriage_status']
        job=data['job']
        person_emp_length=data['person_emp_length']
        adress=data['adress']
        person_home_ownership=data['person_home_ownership']
        region=data['region']
        city=data['city']
        code_postal=data['code_postal']
        loan_intent=data['loan_intent']
        loan_amnt=data['loan_amnt']
        loan_duration=data['loan_duration']
        loan_percent_income=data['loan_percent_income']
        loan_int_rate=data['loan_int_rate']
        loan_grade=data['loan_grade']
        person_income=data['person_income']
        verified="en_cours"
        
        data={
           'first_name':first_name,
           'last_name':last_name,
           'email':email,
           'person_age':person_age,
           'cin':cin, 
           'num_tel':num_tel,
           'marriage_status':marriage_status,
           'job':job,
           'person_emp_length':person_emp_length,
           'adress':adress,
           'person_home_ownership':person_home_ownership,
           'region':region,
           'city':city,
           'code_postal':code_postal,
           'loan_intent':loan_intent,
           'loan_amnt':loan_amnt,
           'loan_duration':loan_duration,
           'loan_percent_income':loan_percent_income,
           'loan_int_rate':loan_int_rate,
           'loan_grade':loan_grade,
           'person_income':person_income,
           'verified':verified
        }
        return data

    def post(self, request):
        
        user=request.user
        user_mail=UserAccount.objects.get(email=user.email)
        user_id=user_mail.id
        data = request.data
        data = self.retrieve_values(data)

        first_name=data['first_name']
        last_name=data['last_name']
        email=data['email']
        person_age=data['person_age']
        cin=data['cin']
        num_tel=data['num_tel']
        marriage_status=data['marriage_status']
        job=data['job']
        person_emp_length=data['person_emp_length']
        adress=data['adress']
        person_home_ownership=data['person_home_ownership']
        region=data['region']
        city=data['city']
        code_postal=data['code_postal']
        loan_intent=data['loan_intent']
        loan_amnt=data['loan_amnt']
        loan_duration=data['loan_duration']
        loan_percent_income=data['loan_percent_income']
        loan_int_rate=data['loan_int_rate']
        loan_grade=data['loan_grade']
        person_income=data['person_income']
        demande=Demande.objects.using('credit').create(
                        ClientId=user_id, first_name=first_name, last_name=last_name,
                        email=email, person_age=person_age, cin=cin, num_tel=num_tel,
                        marriage_status=marriage_status,job=job,person_emp_length=person_emp_length,
                        adress=adress,person_home_ownership=person_home_ownership,region=region,
                        city=city,code_postal=code_postal,loan_intent=loan_intent,loan_amnt=loan_amnt,
                        loan_duration=loan_duration,loan_percent_income=loan_percent_income,
                        loan_int_rate=loan_int_rate,loan_grade=loan_grade,person_income=person_income,
                     )
        
        return Response( {'success': 'demande created successfully'})


def decision_demande(request,identifiant):
    
    #if not request.user.is_authenticated or not request.user.is_banquier:
       # return JsonResponse({'error': 'Unauthorized access'}, status=401)

<<<<<<< HEAD
    demande_data = Demande.objects.using('credit').get(DemandeId=identifiant)
=======
        #if user_account.is_banquier:
    demande_data = Demande.objects.using('credit').get(DemandeId=identifiant).values('person_age','person_income', 'person_home_ownership',
>>>>>>> master
                                                                'person_emp_length','loan_intent', 'loan_grade', 'loan_amnt',
                                                                'loan_int_rate','loan_percent_income'
                                                            )
    data_list = []
    for obj in demande_data:
        data_dict = {}
        data_dict['person_age']=float(obj['person_age'])
        data_dict['person_income']=float(obj['person_income'])
        data_dict['person_emp_length']=float(obj['person_emp_length'])
        data_dict['loan_amnt']=float(obj['loan_amnt'])
        data_dict['loan_int_rate']=float(obj['loan_int_rate'])
        data_dict['loan_percent_income']=float(obj['loan_percent_income'])
>>>>>>> master

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
                                  "loan_grade","person_income")
    return JsonResponse(list(data), safe=False)


def delete_demande(request, demande_id):
    try:
        demande = Demande.objects.get(DemandeId=demande_id)
        demande.delete()
        return JsonResponse({'success': True})
    except Demande.DoesNotExist:
        return JsonResponse({'success': False, 'message': 'Demande not found'})

       

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


        
        
                
        
    
     


