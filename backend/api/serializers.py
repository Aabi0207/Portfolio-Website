from rest_framework import serializers
from .models import Domain, Project

class DomainSerializers(serializers.ModelSerializer):
    class Meta:
        model = Domain
        fields = '__all__'


class ProjectSerializers(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = '__all__'