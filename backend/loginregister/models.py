from django.db import models

# Create your models here.


class User(models.Model):
    full_name = models.CharField(max_length=255, blank=False, null=False)
    email = models.EmailField(max_length=255, blank=False, null=False, unique=True)
    password = models.CharField(max_length=12, blank=False, null=False)
