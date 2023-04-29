# Generated by Django 4.1.7 on 2023-04-27 12:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0009_add_picture_to_user'),
    ]

    operations = [
        migrations.AddField(
            model_name='useraccount',
            name='nb_mail',
            field=models.IntegerField(null=True),
        ),
        migrations.AlterField(
            model_name='useraccount',
            name='picture',
            field=models.ImageField(blank=True, null=True, upload_to='picture/'),
        ),
    ]
