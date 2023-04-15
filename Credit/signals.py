from django.db.models.signals import post_save,post_delete
from django.dispatch import receiver
from django.core.serializers import serialize
from .models import Demande
from user.models import UserAccount

@receiver(post_save, sender=Demande)
@receiver(post_delete, sender=Demande)
def update_last_six_demande(sender, instance, **kwargs):
    last_six_demande = Demande.objects.filter(status='En cours').order_by('-DemandeId')[:6]
    serialized_last_six_demande = serialize('json', last_six_demande)
    cache.set('last_six_demande', serialized_last_six_demande)
    
@receiver(post_save, sender=Demande)
@receiver(post_delete, sender=Demande)
def update_demande_count(sender, **kwargs):
    demande_count = Demande.objects.count()
    cache.set('demande_count', demande_count)
    

@receiver(post_save, sender=UserAccount)
@receiver(post_delete, sender=UserAccount)
def update_client_count(sender, **kwargs):
    client_count = UserAccount.objects.exclude(is_agent=True).count()
    cache.set('client_count', client_count)
    
@receiver(post_save, sender=UserAccount)
@receiver(post_delete, sender=UserAccount)
def update_agent_count(sender, **kwargs):
    agent_count = UserAccount.objects.exclude(is_agent=False).count()
    cache.set('agent_count', agent_count)