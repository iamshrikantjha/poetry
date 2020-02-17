from rest_framework import serializers

from poems.models import Poem, Category

class PoemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Poem
        fields = ['content']

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['name', 'discription', 'imgurl']
