# Generated by Django 4.1.7 on 2023-04-30 10:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('credit', '0005_demande_agentid'),
    ]

    operations = [
        migrations.AddField(
            model_name='demande',
            name='AgentMail',
            field=models.CharField(max_length=50, null=True),
        ),
    ]
