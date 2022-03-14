from dataclasses import field
from rest_framework import serializers

from loginregister.models import Usuario



class UsuarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Usuario
        fields = "__all__"