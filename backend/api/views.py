from rest_framework import viewsets
from .serializers import DomainSerializers, ProjectSerializers
from .models import Domain, Project

# Create your views here.
class DomainViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Domain.objects.all()
    serializer_class = DomainSerializers


class ProjectViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializers
