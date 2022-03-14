import email
from django.db import models

# Create your models here.


class Usuario(models.Model):
    fullName = models.CharField(max_length=255, blank=False, null=False)
    email = models.EmailField(max_length=255, blank=False, null=False, unique=True)
    password = models.CharField(max_length=12, blank=False, null=False)

    def __str__(self):
        return "id: {id} - nome: {nome}".format(id=self.id, nome = self.fullName)