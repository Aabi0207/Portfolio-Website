from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Domain, Project
from .serializers import DomainSerializer, ProjectSerializer
from rest_framework import status

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
