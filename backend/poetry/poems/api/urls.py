from django.urls import path

from .views import PoemListView, CategoryListView, CategoryPoemListView

urlpatterns = [
    path('', PoemListView.as_view()),
    path('a/', CategoryListView.as_view()),
    path('b/<category>', CategoryPoemListView.as_view()),
    # path('<pk>', PoemDetailView.as_view()),
]