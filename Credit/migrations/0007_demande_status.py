# Generated by Django 4.1.7 on 2023-04-05 14:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('credit', '0006_merge_20230405_1545'),
    ]

    operations = [
        migrations.AddField(
            model_name='demande',
            name='status',
            field=models.CharField(default='En cours', max_length=50, null=True),
        ),
    ]
