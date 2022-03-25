from django.db import models
from django.contrib.auth.models import AbstractUser

from loginregister.managers import MyUserManager
# Create your models here.


class User(AbstractUser):
    first_name = models.CharField(max_length=150, blank=False, null=False)
    last_name = models.CharField(max_length=150, blank=False, null=False)
    email = models.EmailField(max_length=255, blank=False, null=False, unique=True)
    password = models.CharField(max_length=128, blank=False, null=False)
    username = None

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []
    
    objects = MyUserManager()