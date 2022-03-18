from django.contrib import admin
from django.urls import path

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

from loginregister.views import RegisterView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('token/', TokenObtainPairView.as_view(), name="obtain-token-pair"),
    path('token/refresh/', TokenRefreshView.as_view(), name="refresh-token"),
    path('register/', RegisterView.as_view(), name="register"),
]
