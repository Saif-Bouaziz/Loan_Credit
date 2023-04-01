from django.db import models
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
    loan_amnt=models.IntegerField()
    loan_duration=models.CharField(max_length=50, choices=LOAN_DURATION_CHOICES)
    loan_percent_income=models.FloatField()
    loan_int_rate=models.FloatField()   
    loan_grade=models.CharField(max_length=50,null=True)
    person_income=models.FloatField()
    decision=models.CharField(max_length=50,null=True,default="NotYet")

    