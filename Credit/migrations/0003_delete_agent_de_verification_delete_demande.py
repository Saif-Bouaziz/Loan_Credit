# Generated by Django 4.1.7 on 2023-03-27 01:51

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("Credit", "0002_agent_de_verification"),
    ]

    operations = [
        migrations.DeleteModel(
            name="agent_de_verification",
        ),
        migrations.DeleteModel(
            name="Demande",
        ),
    ]
