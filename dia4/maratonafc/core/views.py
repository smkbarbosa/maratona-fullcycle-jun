from django.shortcuts import render
from django.views.generic.list import ListView
from django.http import JsonResponse

from maratonafc.core.models import AulasMaratona

# Create your views here.
def maratona(request):
    data = list(AulasMaratona.objects.values())
    return JsonResponse(data, safe=False)

        

