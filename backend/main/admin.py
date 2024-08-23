
from modeltranslation.translator import register, TranslationOptions
from .models import News, Event

@register(News)
class NewsTranslationOptions(TranslationOptions):
    fields = ('title', 'content')

@register(Event)
class EventTranslationOptions(TranslationOptions):
    fields = ('title', 'content')


from django.contrib import admin
from modeltranslation.admin import TranslationAdmin
from .models import News, Event

class NewsAdmin(TranslationAdmin):
    list_display = ('title_ru', 'published_date', 'image')
    fields = ('title_en', 'title_ru', 'title_kk', 'content_en', 'content_ru', 'content_kk', 'image')

class EventAdmin(TranslationAdmin):
    list_display = ('title_ru', 'published_date', 'image')
    fields = ('title_en', 'title_ru', 'title_kk', 'content_en', 'content_ru', 'content_kk', 'image')

admin.site.register(News, NewsAdmin)
admin.site.register(Event, EventAdmin)
