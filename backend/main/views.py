from django.shortcuts import render
from rest_framework import viewsets
from .models import News, Event
from .serializers import NewsSerializer, EventSerializer

class NewsViewSet(viewsets.ModelViewSet):
    queryset = News.objects.all().order_by('-published_date')
    serializer_class = NewsSerializer

class EventViewSet(viewsets.ModelViewSet):
    queryset = Event.objects.all().order_by('-published_date')
    serializer_class = EventSerializer