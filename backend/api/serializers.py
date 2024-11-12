from rest_framework import serializers
from .models import Domain, Project

class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = ['id', 'title', 'description', 'project_url', 'image']

class DomainSerializer(serializers.ModelSerializer):
    projects = ProjectSerializer(many=True, read_only=True)

    class Meta:
        model = Domain
        fields = ['id', 'name', 'projects']