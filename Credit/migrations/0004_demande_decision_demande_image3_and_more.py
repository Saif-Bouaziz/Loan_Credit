# Generated by Django 4.1.7 on 2023-04-08 16:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('credit', '0003_demande_decision_demande_image3_demande_image4_and_more'),
    ]

    operations = [
        
        
        migrations.AddField(
            model_name='demande',
            name='img_Releves_compte_banque',
            field=models.TextField(null=True),
        ),
        migrations.AddField(
            model_name='demande',
            name='img_avis_imposition',
            field=models.TextField(null=True),
        ),
        migrations.AddField(
            model_name='demande',
            name='img_bulletins_salaire',
            field=models.TextField(null=True),
        ),
        migrations.AddField(
            model_name='demande',
            name='img_cin',
            field=models.TextField(null=True),
        ),
        migrations.AddField(
            model_name='demande',
            name='img_justificatif_domicile_actuel',
            field=models.TextField(null=True),
        ),
        
    ]