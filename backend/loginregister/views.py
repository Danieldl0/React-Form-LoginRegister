from rest_framework.views import APIView
from rest_framework.response import Response
from loginregister.api.serializers import UsuarioSerializer
from rest_framework import serializers
from loginregister.models import Usuario

# Create your views here.


class UsuariosView(APIView):

    def get(self, request, format=None):
        users = Usuario.objects.all()
        serializer = UsuarioSerializer(users, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        if Usuario.objects.filter(**request.data).exists():
            raise serializers.ValidationError("Usuario já cadastrado")

        serializer = UsuarioSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        

class UsuarioView(APIView):

    def get_object(self, pk):
        return Usuario.objects.get(pk=pk)

    def get(self, request, pk, format=None):
        user = self.get_object(pk)
        serializer = UsuarioSerializer(user)
        return Response(serializer.data)
