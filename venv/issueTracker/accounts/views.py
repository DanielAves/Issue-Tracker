from django.shortcuts import render
from django.http import HttpResponse

def home(request):
    return render(request, 'accounts/dashboard.html')

def users(request):
    return render(request, 'accounts/users.html')
