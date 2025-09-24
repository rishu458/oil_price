from django.shortcuts import render
from django.http import JsonResponse
from datetime import datetime

#from django.http import HttpResponse

def home(request):
    return render(request, 'home.html')

def get_oil_price(request):
    # Example: price could come from a database or API
    price = 200.50  # static for now
    now = datetime.now().strftime("%H:%M:%S")
    return JsonResponse({"price": price, "time": now})

