from django.contrib import admin

# Register your models here.
from maratonafc.core.models import AulasMaratona


class AulasAdmin(admin.ModelAdmin):
    model = AulasMaratona
    list_display = ['name', 'url']


admin.site.register(AulasMaratona, AulasAdmin)