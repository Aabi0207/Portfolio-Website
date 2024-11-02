from django.urls import path, include
from .views import DomainViewSet, ProjectViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'domains', DomainViewSet)
router.register(f'projects', ProjectViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
