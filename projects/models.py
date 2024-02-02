from django.db import models

class ProjectManager(models.Model):
    name = models.CharField(max_length=30)
    first_last_name = models.CharField(max_length=30)
    second_last_name = models.CharField(max_length=30, null=True, blank=True)

    def __str__(self):
        return f'{self.name} {self.first_last_name} {self.second_last_name}'
    
class Project(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField(max_length=200, blank=True)
    project_manager = models.ForeignKey(ProjectManager, on_delete=models.PROTECT, null=True, blank=True)

    def __str__(self):
        return self.name

class Developer(models.Model):
    name = models.CharField(max_length=30)
    first_last_name = models.CharField(max_length=30)
    second_last_name = models.CharField(max_length=30, null=True, blank=True)
    project = models.ManyToManyField(Project, blank=True)

    def __str__(self):
        return f'{self.name} {self.first_last_name} {self.second_last_name}'
