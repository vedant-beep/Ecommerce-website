from django.urls import path
from . import views
urlpatterns = [
    path('', views.index, name="index"),
    path('products/', views.products, name="products"),
    path('about-us/', views.about_us, name="about_us"),
    path('contact-us/', views.contact, name='contact_us'),
    path('products/flow-level-monitor/', views.fl_monitor, name="fl_monitor"),
]