# Generated by Django 4.1.7 on 2023-03-30 01:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('credit', '0002_alter_demande_clientid'),
    ]

    operations = [
        migrations.AlterField(
            model_name='demande',
            name='ClientId',
            field=models.CharField(max_length=50),
        ),
    ]
