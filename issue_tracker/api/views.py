from django.shortcuts import render
from django.http import JsonResponse

from rest_framework.decorators import api_view
from rest_framework.response import Response 
from .serializers import TicketSerializer, UserSerializer
from .models import Ticket, Project, User
# Create your views here.

@api_view(['GET'])
def apiOverview(request):
    api_urls = {
        'CreateTicket':'/task-create-ticket',
        'DeleteTicket':'/task-delete-ticket'
    }


    return Response (api_urls)

@api_view(['GET'])
def TicketList(request):
    tickets = Ticket.objects.all()
    serializer = TicketSerializer(tickets, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def UsersOnProject(request,pk):
    project = Project.objects.get(id=pk)
    users = project.users.all()
    serializer = UserSerializer(users, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def TicketCreate(request):
    serializer = TicketSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data)


@api_view(['POST'])
def TicketUpdate(request,pk):
    ticket = Ticket.objects.get(id=pk)
    serializer = TicketSerializer(instance=ticket,data=request.data)

    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data)

@api_view(['DELETE'])
def TicketDelete(request,pk):
    ticket = Ticket.objects.get(id=pk)
    ticket.delete()

    return Response("Item deleted sucessfully")