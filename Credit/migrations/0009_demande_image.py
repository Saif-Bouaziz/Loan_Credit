# Generated by Django 4.1.7 on 2023-04-03 16:28

import credit.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('credit', '0008_remove_demande_verified'),
    ]

    operations = [
        migrations.AddField(
            model_name='demande',
            name='image',
            field=models.ImageField(null=True, upload_to=credit.models.upload_to, verbose_name='image'),
        ),
    ]