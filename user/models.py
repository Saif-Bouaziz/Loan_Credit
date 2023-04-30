from django.db import models 
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager
from django.utils import timezone


class UserAccountManager(BaseUserManager):
    def create_user(self, email, name, password=None):
        if not email:
            raise ValueError('Users must have an email address')
        email = self.normalize_email(email)
        email = email.lower()

        user = self.model(
            email=email,
            name=name,
            date_inscription=timezone.now(),
        )         
        user.set_password(password)
        user.save(using=self._db)

        return user

    def create_banquier(self, email, name, password=None):
        user = self.create_user(email, name, password)

        user.is_banquier = True
        user.save(using=self._db)

        return user 
    
    def create_Agent(self, email, name, password=None):
        user = self.create_user(email, name, password)
        user.is_agent = True
        user.save(using=self._db)
        return user

    def create_superuser(self, email, name, password=None):
        user = self.create_user(email, name, password)

        user.is_superuser = True
        user.is_staff = True

        user.save(using=self._db)

        return user

def upload_to(instance, filename):
    return 'images/{filename}'.format(filename=filename)


class UserAccount(AbstractBaseUser, PermissionsMixin):
   
    email = models.EmailField(max_length=255, unique=True)
    name = models.CharField(max_length=255)
    
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    is_banquier = models.BooleanField(default=False)
    is_agent=models.BooleanField(default=False) 
    date_inscription = models.DateTimeField(default=timezone.now)
    image=models.TextField(null=True)
    picture=models.ImageField(upload_to="picture/",blank=True,null=True)
    nb_mail=models.IntegerField(default=0)

    

    objects = UserAccountManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['name']
    
    def get_full_name(self):
        return self.first_name

    def get_short_name(self):
        return self.first_name
    def __str__(self):
        return self.email