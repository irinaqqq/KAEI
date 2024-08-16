from rest_framework import viewsets
from .models import News, Event
from .serializers import NewsSerializer, EventSerializer
from .permissions import ReadOnly  # Импортируйте ваш класс разрешений

class NewsViewSet(viewsets.ModelViewSet):
    queryset = News.objects.all().order_by('-published_date')
    serializer_class = NewsSerializer
    permission_classes = [ReadOnly]  # Применение разрешений

class EventViewSet(viewsets.ModelViewSet):
    queryset = Event.objects.all().order_by('-published_date')
    serializer_class = EventSerializer
    permission_classes = [ReadOnly]  # Применение разрешений