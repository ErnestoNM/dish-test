from django.urls import path, include
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register(r'projects', views.ProjectView, 'project')
router.register(r'project_managers', views.ProjectManagerView, 'project_manager')
router.register(r'developers', views.DeveloperView, 'developer')

urlpatterns = [
    path('api/', include(router.urls))
]
