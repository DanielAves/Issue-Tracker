from django.urls import path
from . import views 


urlpatterns = [
    path('', views.apiOverview, name="api-overview"), 
    path('ticket-list/', views.TicketList, name="ticket-list"), 
    path('users-project/<str:pk>/', views.UsersOnProject, name="users-on-project"), 
    path('ticket-create/', views.TicketCreate, name="ticket-create"), 
    path('ticket-update/<str:pk>/', views.TicketUpdate, name="ticket-update"), 
    path('ticket-delete/<str:pk>/', views.TicketDelete, name="ticket-delete"), 
]
