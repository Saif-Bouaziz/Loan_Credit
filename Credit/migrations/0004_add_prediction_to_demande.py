# Generated by Django 4.1.7 on 2023-04-22 19:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('credit', '0003_add_affected_to_credit'),
    ]

    operations = [
        migrations.AddField(
            model_name='demande',
            name='prediction',
            field=models.IntegerField(null=True),
        ),
    ]