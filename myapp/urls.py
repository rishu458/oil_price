from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('api/price/', views.get_oil_price, name='get_oil_price'),
]
