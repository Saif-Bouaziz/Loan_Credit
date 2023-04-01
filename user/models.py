from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin

class ClientManager(BaseUserManager):
    def create_user(self, email,name, password=None):
        if not email:
            raise ValueError("Clients must have an email address")        
        email = self.normalize_email(email)
        email = email.lower()
        
        user = self.model(
            email=email,
            name=name
        )      
        user.set_password(password)
        user.save(using=self._db)
        
        return user

    def create_superuser(self, email,name, password=None):
        user = self.create_user(email,name, password)
        user.is_superuser = True
        user.is_staff = True
        user.save(using=self._db)
        return user
"""
class Client(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(max_length=255, unique=True)
    name = models.CharField(max_length=30)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    objects = ClientManager() 

    is_banquier = models.BooleanField(default=False) 
    is_agent=models.BooleanField(default=False) 

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['name']

    def __str__(self):
        return self.email 
"""
class AgentManager(BaseUserManager):
    def create_agent(self, email,name, password=None):
        if not email:
            raise ValueError("Agents must have an email address")
        email = self.normalize_email(email)
        email = email.lower()
        
        user = self.model(
            email=email,
            name=name
        )         
        
        user.is_agent = True
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email,name, password=None):
        user = self.create_agent(email, name,password)
        user.is_superuser = True
        user.is_staff = True

        user.save(using=self._db)
        return user
"""
class Agent(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(unique=True)
    name = models.CharField(max_length=30)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    is_banquier = models.BooleanField(default=False)
    is_agent=models.BooleanField(default=False) 
    objects = AgentManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['name']

    def __str__(self):
        return self.email
"""
class BanquierManager(BaseUserManager):
    def create_banquier(self, email,name, password=None):
        if not email:
            raise ValueError("Banquiers must have an email address")
        email = self.normalize_email(email)
        email = email.lower()
        user = self.model(
            email=email,
            name=name
        )    
        user.is_banquier=True      
        user.set_password(password) 
        user.save(using=self._db) 
        return user

    def create_superuser(self, email,name, password=None):
        user = self.create_banquier(email,name, password)
        user.is_superuser = True
        user.is_staff = True
        user.save(using=self._db)
        return user

class UserAccount(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(unique=True)
    name = models.CharField(max_length=30)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    is_banquier = models.BooleanField(default=True)
    is_agent=models.BooleanField(default=False) 
    objects = BanquierManager()
    objects= ClientManager()
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['name']

    def __str__(self):
        return self.email