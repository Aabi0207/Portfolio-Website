from django.urls import path
from .views import TopProjectsView, AllProjectsView

urlpatterns = [
    path('top-projects/', TopProjectsView.as_view(), name='top-projects'),
    path('all-projects/', AllProjectsView.as_view(), name='all-projects'),
    path('all-projects/<str:domain_name>/', AllProjectsView.as_view(), name='domain-projects'),
]
