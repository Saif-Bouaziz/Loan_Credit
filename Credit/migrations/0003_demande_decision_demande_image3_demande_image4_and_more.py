# Generated by Django 4.1.7 on 2023-04-08 15:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('credit', '0002_demande_decision_demande_image3_and_more'),
    ]

    operations = [
        
        migrations.AddField(
            model_name='demande',
            name='image4',
            field=models.TextField(null=True),
        ),
        
    ]