from django.db import models
from django.contrib.auth.models import User
from datetime import datetime
from django.utils import timezone

# class Customer(models.Model):
#     name = models.CharField(max_length=200, null=True)
#     phone = models.CharField(max_length=200, null=True)
#     email = models.CharField(max_length=200, null=True)
#     date_created = models.DateTimeField(auto_now_add=True, null=True)


#     def __str__(self):
#         return self.name

class Project(models.Model):
    name = models.CharField(max_length=100)
    description = models.CharField(max_length=500)
    users = models.ManyToManyField(User) 

    def __str__(self):
        return self.name

class Ticket(models.Model):
    STATUS = (
        ("NEW", "New"),
        ("INPROGRESS","In-Progress"),
        ("HOLD", "Hold"), 
        ("COMPLETE","Complete"),
        ("AWAITING-APPROVAL","Awaiting-Approval")
    ) 
    PRIORITY = (
        ("URGENT","Urgent"),
        ("HIGH","High"), 
        ("MEDIUM","Medium"), 
        ("LOW","Low")
    )
    TICKET_TYPE = (
        ("ISSUE","Issue"), 
        ("INCIDENT", "Incident")
    )

    title = models.CharField(max_length=200)
    ticketType = models.CharField(max_length=20,choices=TICKET_TYPE)
    description = models.CharField(max_length=500)
    createDate = models.DateField(default=timezone.localdate)
    dueDate = models.DateField
    openTicket = models.BooleanField (default=True) 
    status = models.CharField (max_length=200,choices=STATUS)
    priority = models.CharField (max_length=200,choices=PRIORITY)
    assignee =  models.ForeignKey (User, related_name='tickets', on_delete = models.CASCADE)
    project = models.ForeignKey (Project, related_name='project_tickets', on_delete = models.CASCADE)

    def __str__(self):
        return self.title



   
# class SiteDetails(models.Model):
#     site =  models.CharField(max_length=200)
#     username = models.CharField(max_length=200)
#     salt = models.BinaryField(max_length=32)
#     encryptedPass = models.BinaryField(max_length=200)
#     user = models.ForeignKey (User, on_delete = models.CASCADE)

#     def __str__(self):
#         return self.id
# Create your models here.
