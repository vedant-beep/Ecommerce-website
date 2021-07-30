from django.shortcuts import render
from .models import Contact
from django.http import HttpResponse
# Create your views here.
def index(request):
    return render(request, 'index.html')

def products(request):
    return render(request, 'products.html')

def about_us(request):
    return render(request, 'about_us.html')

def fl_monitor(request):
    return render(request, 'flow-level-monitor.html')

def contact(request):
    if request.method == 'POST':
        # print(request)
        name = request.POST.get('full-name')
        email = request.POST.get('email')
        phone = request.POST.get('phone')
        message = request.POST.get('message')
        contact = Contact(name=name, email=email, phone=phone, message=message)
        contact.save()
        # print(name, email, phone, message)
    return render(request, 'contact.html')

