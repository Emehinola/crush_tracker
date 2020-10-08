from django.shortcuts import render

# Create your views here.
def home(request):
    return render(request, 'index/home.html')

def create_id(request):
    return render(request, 'index/create_id.html')

def login(request):
    return render(request, 'index/account_login.html')

def account(request):
    return render(request, 'index/account.html')