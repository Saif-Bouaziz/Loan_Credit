
# Generated by Django 4.1.7 on 2023-03-30 23:28



from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0002_alter_useraccount_email_alter_useraccount_name'),
    ]

    operations = [
        migrations.AlterField(
            model_name='useraccount',
            name='email',
            field=models.EmailField(max_length=255, unique=True),
        ),
        migrations.AlterField(
            model_name='useraccount',
            name='name',
            field=models.CharField(max_length=255),
        ),
    ]
