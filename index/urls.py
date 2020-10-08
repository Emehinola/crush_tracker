from django.conf.urls import url
from. import views

urlpatterns = [
    url(r'create/', views.create_id, name='create_id'),
    url(r'login/', views.login, name='login'),
    url(r'account/', views.account, name='account'),
    url(r'', views.home, name='home'),
]