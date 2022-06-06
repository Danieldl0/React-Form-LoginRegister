from django.contrib import admin
from django.urls import path, include

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

from loginregister.views import LoginView, RegisterView, UserView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('token/', TokenObtainPairView.as_view(), name="obtain-token-pair"),
    path('token/refresh/', TokenRefreshView.as_view(), name="refresh-token"),
    path('register/', RegisterView.as_view(), name="register"),
    path('login/', LoginView.as_view(), name="login"),
    path('users/', UserView.as_view(), name="usuarios")
]

urlpatterns += [
    path('api-auth/', include('rest_framework.urls')),
]