# Generated by Django 4.1.7 on 2023-03-30 15:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('credit', '0003_alter_demande_clientid'),
    ]

    operations = [
        migrations.AlterField(
            model_name='demande',
            name='ClientId',
            field=models.IntegerField(max_length=50),
        ),
    ]
