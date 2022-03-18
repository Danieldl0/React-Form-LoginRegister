from rest_framework.views import APIView
from loginregister.api.serializers import UserSerializer
from rest_framework.response import Response
from rest_framework import serializers
from rest_framework.exceptions import AuthenticationFailed
from loginregister.models import User

# Create your views here.


class RegisterView(APIView):
    def post(self, request):
        email = request.data["email"]
        if User.objects.filter(email=email).first():
            raise serializers.ValidationError("Email já cadastrado")

        serializer = UserSerializer(data=request.data)



        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)



class LoginView(APIView):
    def post(self, request):
        email = request.data['email']
        password = request.data['password']

        user = User.objects.filter(email=email).first()

        if user is None:
            raise serializers.ValidationError('Email não cadastrado')

        if not user.check_password(password):
            raise serializers.ValidationError('Senha inválida')

        return Response({
            "msg":"certo"
        })