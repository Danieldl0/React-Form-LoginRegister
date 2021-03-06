from secrets import token_bytes
from rest_framework.views import APIView
from loginregister.api.serializers import UserSerializer
from rest_framework.response import Response
from rest_framework import serializers
from loginregister.models import User
from rest_framework.exceptions import AuthenticationFailed
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework_simplejwt.authentication import JWTAuthentication
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

        refresh = RefreshToken.for_user(user)
        token = str(refresh.access_token)

        response = Response()

        response.set_cookie("jwt", token, httponly=True)
        response.data = {
            "jwt": token
        }
        return response


class UserView(APIView):

    validated_user_token = JWTAuthentication()

    def get(self, request):
        
        token = request.COOKIES.get('jwt')
        

        doda = self.validated_user_token.get_validated_token(token)
        
        
        if not token:
            raise AuthenticationFailed('Unauthenticated!')
        
        
        user = User.objects.filter(id = doda['user_id']).get()
        serializer = UserSerializer(user) 

        return Response(serializer.data)
