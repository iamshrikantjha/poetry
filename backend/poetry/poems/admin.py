from django.contrib import admin
from .models import Poem, Category

# Register your models here.
admin.site.register(Poem)
admin.site.register(Category)
