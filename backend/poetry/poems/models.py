from django.db import models

# Create your models here.
class Category(models.Model):
    name = models.TextField(max_length=250)
    discription = models.TextField(max_length=500)
    imgurl = models.TextField()

    def __str__(self):
        return self.name

class Poem(models.Model):
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name='Poem')
    content = models.TextField()

    def __str__(self):
        return self.content

