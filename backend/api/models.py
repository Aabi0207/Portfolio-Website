from django.db import models

# Create your models here.
class Domain(models.Model):
    name = models.CharField(max_length=100, unique=True)
    description = models.TextField(blank=True)

    def __str__(self):
        return self.name
    

class Project(models.Model):
    domain = models.ForeignKey(Domain, related_name='projects', on_delete=models.CASCADE)
    title = models.CharField(max_length=200)
    description = models.TextField()
    project_url = models.URLField(blank=True)
    image = models.ImageField(upload_to='projects_images', blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

