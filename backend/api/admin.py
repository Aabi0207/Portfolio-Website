from django.contrib import admin
from .models import Domain, Project

@admin.register(Domain)
class DomainAdmin(admin.ModelAdmin):
    list_display = ('name', 'description')  # Display these fields in the admin list view

@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ('title', 'domain', 'created_at')
    list_filter = ('domain',)  # Filter by domain
    search_fields = ('title',)  # Search projects by title
