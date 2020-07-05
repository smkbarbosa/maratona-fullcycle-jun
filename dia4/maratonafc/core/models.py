from django.db import models

# Create your models here.
class AulasMaratona(models.Model):
    name = models.CharField(max_length=200)
    url = models.CharField(max_length=300)
    
    class Meta:
        verbose_name = 'aula maratona'
        verbose_name_plural = 'aulas maratona'

    def __str__(self):
        return self.name