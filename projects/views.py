from rest_framework import viewsets
from .serializers import ProjectSerializer, ProjectManagerSerializer, DeveloperSerializer
from .models import Project, ProjectManager, Developer

class ProjectView(viewsets.ModelViewSet):
    serializer_class = ProjectSerializer
    queryset = Project.objects.all()

class ProjectManagerView(viewsets.ModelViewSet):
    serializer_class = ProjectManagerSerializer
    queryset = ProjectManager.objects.all()

class DeveloperView(viewsets.ModelViewSet):
    serializer_class = DeveloperSerializer
    queryset = Developer.objects.all()
    