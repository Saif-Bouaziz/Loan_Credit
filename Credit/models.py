from django.db import models
from user.models import UserAccount
from django.utils.translation import gettext_lazy as _
from datetime import datetime


def upload_to(instance,filename):
    return 'demande/{filename}'.format(filename=filename)
# Create your models here.
class Demande(models.Model):
    MARRIAGE_STATUS_CHOICES = (
        ('married', 'Married'),
        ('single', 'Single'),
    )
    
    HOME_OWNERSHIP_CHOICES=(
        ('OWN', 'OWN'),
        ('MORTGAGE', 'MORTGAGE'),
        ('RENT', 'RENT'),
        ('OTHER', 'OTHER'),
        
    )
    LOAN_DURATION_CHOICES=(
    ('12m', '12 months'),
        ('24m', '24 months'),
        ('36m', '36 months'),
        ('48m', '48 months'),
        
    )

    DemandeId=models.AutoField(primary_key=True)
    ClientId=models.IntegerField()
    first_name=models.CharField(max_length=50)
    last_name=models.CharField(max_length=50)
    email=models.EmailField()
    person_age=models.IntegerField()
    cin=models.IntegerField()
    num_tel=models.CharField(max_length=8)
    marriage_status = models.CharField(max_length=8, choices=MARRIAGE_STATUS_CHOICES)
    job=models.CharField(max_length=50)
    person_emp_length=models.IntegerField()
    adress=models.CharField(max_length=50) 
    person_home_ownership=models.CharField(max_length=50, choices=HOME_OWNERSHIP_CHOICES)
    region=models.CharField(max_length=50)
    city=models.CharField(max_length=50)
    code_postal=models.IntegerField()
    loan_intent=models.CharField(max_length=50)
    loan_amnt=models.FloatField()
    loan_duration=models.CharField(max_length=50, choices=LOAN_DURATION_CHOICES)
    loan_percent_income=models.FloatField()
    loan_int_rate=models.FloatField()   
    loan_grade=models.CharField(max_length=50,null=True)
    person_income=models.FloatField()
    status=models.CharField(max_length=50,null=True,default="En cours")
    decision=models.CharField(max_length=50,default="notyet")
    image3 = models.BinaryField(null=True)
    image4 = models.TextField(null=True)
    img_cin = models.TextField(null=True)
    img_avis_imposition = models.TextField(null=True)
    img_bulletins_salaire = models.TextField(null=True)
    img_Releves_compte_banque = models.TextField(null=True)
    img_justificatif_domicile_actuel = models.TextField(null=True)
    created = models.DateTimeField(auto_now_add=True)
    prediction=models.IntegerField(null=True)
    AgentId=models.IntegerField(null=True)
    AgentMail=models.CharField(max_length=50,null=True)
    agent_associé=models.IntegerField(null=True,default=0)


    
    
class Credit(models.Model):
    demande = models.ForeignKey(Demande, on_delete=models.CASCADE)
    IdCredit=models.AutoField(primary_key=True)
    montant_principal=models.FloatField()
    montant_restant=models.FloatField()
    taux=models.FloatField()
    mensualite=models.CharField(max_length=20)
    affected = models.DateTimeField(auto_now_add=True)


    

