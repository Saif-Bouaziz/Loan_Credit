
from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Demande',
            fields=[
                ('DemandeId', models.AutoField(primary_key=True, serialize=False)),
                ('first_name', models.CharField(max_length=50)),
                ('last_name', models.CharField(max_length=50)),
                ('email', models.EmailField(max_length=254)),
                ('person_age', models.IntegerField()),
                ('cin', models.IntegerField()),
                ('num_tel', models.CharField(max_length=8)),
                ('marriage_status', models.CharField(choices=[('married', 'Married'), ('single', 'Single')], max_length=8)),
                ('job', models.CharField(max_length=50)),
                ('person_emp_length', models.IntegerField()),
                ('adress', models.CharField(max_length=50)),
                ('person_home_ownership', models.CharField(choices=[('OWN', 'OWN'), ('MORTGAGE', 'MORTGAGE'), ('RENT', 'RENT'), ('OTHER', 'OTHER')], max_length=50)),
                ('region', models.CharField(max_length=50)),
                ('city', models.CharField(max_length=50)),
                ('code_postal', models.IntegerField()),
                ('loan_intent', models.CharField(max_length=50)),
                ('loan_amnt', models.FloatField()),
                ('loan_duration', models.CharField(choices=[('12m', '12 months'), ('24m', '24 months'), ('36m', '36 months'), ('48m', '48 months')], max_length=50)),
                ('loan_percent_income', models.FloatField()),
                ('loan_int_rate', models.FloatField()),
                ('loan_grade', models.CharField(max_length=50, null=True)),
                ('person_income', models.FloatField()),
                ('verified', models.CharField(max_length=50, null=True)),
                ('ClientId', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
