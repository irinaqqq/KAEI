from django.apps import AppConfig

class MainConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'main'

    def ready(self):
        # Импортируйте ваш файл translation.py, чтобы зарегистрировать перевод
        import main.translation
