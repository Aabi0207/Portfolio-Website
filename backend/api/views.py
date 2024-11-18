from rest_framework.views import APIView
from .models import Domain, Project
from .serializers import DomainSerializer, ProjectSerializer
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.core.mail import send_mail
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json

# Create your views here.
class TopProjectsView(APIView):
    def get(self, request):
        domains = Domain.objects.all()
        top_projects = {}
        
        for domain in domains:
            # Fetch top 3 projects per domain
            if domain.name != "Other":
                top_projects[domain.name] = Project.objects.filter(domain=domain)[:3]
        
        response_data = {}
        for domain_name, projects in top_projects.items():
            response_data[domain_name] = ProjectSerializer(projects, many=True).data
        
        return Response(response_data)

class AllProjectsView(APIView):
    def get(self, request):
        domains = Domain.objects.all()
        all_projects = {}
        
        for domain in domains:
            # Fetch all projects per domain
            all_projects[domain.name] = Project.objects.filter(domain=domain)
        
        response_data = {}
        for domain_name, projects in all_projects.items():
            response_data[domain_name] = ProjectSerializer(projects, many=True).data
        
        return Response(response_data)


@csrf_exempt
def send_email(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            name = data.get('name')
            email = data.get('email')
            message = data.get('message')

            # Construct the email message
            subject = f"New Contact Form Submission from {name}"
            body = f"Name: {name}\nEmail: {email}\n\nMessage:\n{message}"

            send_mail(
                subject,
                body,
                email,  # From email
                ['abhishekbiradar0207@gmail.com'],  # To email
                fail_silently=False,
            )

            return JsonResponse({'success': True, 'message': 'Email sent successfully!'})

        except Exception as e:
            return JsonResponse({'success': False, 'message': str(e)})

    return JsonResponse({'success': False, 'message': 'Invalid request method.'})