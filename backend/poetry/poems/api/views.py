from rest_framework.generics import ListAPIView, RetrieveAPIView

from poems.models import Poem, Category
from .serializers import PoemSerializer, CategorySerializer


class PoemListView(ListAPIView):
    queryset = Poem.objects.all()
    serializer_class = PoemSerializer


class CategoryPoemListView(ListAPIView):
    # queryset = ''
    serializer_class = PoemSerializer

    def get_queryset(self):
        category = self.kwargs['category']
        # return Products.objects.filter(categories__title=self.title)
        return Poem.objects.filter(category__name=category)


class CategoryListView(ListAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
