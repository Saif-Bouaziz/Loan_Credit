from django.db.models.signals import post_save,post_delete
from django.dispatch import receiver
from django.core.serializers import serialize
from .models import Demande,Credit
from user.models import UserAccount
from django.db.models import Count


@receiver(post_save, sender=Demande)
@receiver(post_delete, sender=Demande)
def update_last_six_demande(sender, instance, **kwargs):
    last_six_demande = Demande.objects.filter(status='En cours').order_by('-DemandeId')[:6]
    serialized_last_six_demande = serialize('json', last_six_demande)
    cache.set('last_six_demande', serialized_last_six_demande)
    
@receiver(post_save, sender=Demande)
@receiver(post_delete, sender=Demande)
def update_demande_count(sender, instance, **kwargs):
    demande_count = Demande.objects.filter(decision="Accepted").count()
    

@receiver(post_save, sender=UserAccount)
@receiver(post_delete, sender=UserAccount)
def update_client_count(sender, instance, **kwargs):
    client_count ()
    
@receiver(post_save, sender=UserAccount)
@receiver(post_delete, sender=UserAccount)
def update_agent_count(sender, instance, **kwargs):
    agent_count = UserAccount.objects.filter(is_agent=False).count()
    

@receiver(post_save, sender=Credit)
@receiver(post_delete, sender=Credit)
def update_credit_counts_on_save(sender, instance, **kwargs):
    update_credit_counts()
    
@receiver(post_save, sender=Demande)
@receiver(post_delete, sender=Demande)
def update_demande_counts_on_save(sender, instance, **kwargs):
    demande_count_date()
    
@receiver(post_save, sender=Credit)
@receiver(post_delete, sender=Credit)
def update_credit_count(sender, **kwargs):
    credit_count = Credit.objects.count()
    
@receiver(post_save, sender=Credit)
@receiver(post_delete, sender=Credit)
def update_credit_counts_date(sender, instance, **kwargs):
    credit_count_date()
    
@receiver(post_save, sender=UserAccount)
@receiver(post_delete, sender=UserAccount)
def update_client_counts_date(sender, instance, **kwargs):
    client_count_date()
    
@receiver(post_save, sender=UserAccount)
@receiver(post_delete, sender=UserAccount)
def update_agent_counts_date(sender, instance, **kwargs):
    agent_count_date()
    
@receiver(post_save, sender=UserAccount)
@receiver(post_delete, sender=UserAccount)
def update_nb_mail_counts(sender, instance, **kwargs):
    get_nb_email()