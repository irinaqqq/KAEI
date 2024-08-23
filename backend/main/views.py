from rest_framework import viewsets
from .models import News, Event
from .serializers import NewsSerializer, EventSerializer
from .permissions import ReadOnly
from django.utils.translation import activate

class NewsViewSet(viewsets.ModelViewSet):
    queryset = News.objects.all().order_by('-published_date')
    serializer_class = NewsSerializer
    permission_classes = [ReadOnly]

    def get_queryset(self):
        lang = self.request.query_params.get('lang', 'ru')  # Получаем язык из запроса, по умолчанию 'ru'
        activate(lang)  # Активируем язык
        return super().get_queryset()

class EventViewSet(viewsets.ModelViewSet):
    queryset = Event.objects.all().order_by('-published_date')
    serializer_class = EventSerializer
    permission_classes = [ReadOnly]

    def get_queryset(self):
        lang = self.request.query_params.get('lang', 'ru')  # Получаем язык из запроса, по умолчанию 'ru'
        activate(lang)  # Активируем язык
        return super().get_queryset()
