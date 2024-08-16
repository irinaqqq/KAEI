from rest_framework.permissions import BasePermission

class ReadOnly(BasePermission):
    def has_permission(self, request, view):
        # Разрешает только GET запросы
        return request.method in ['GET', 'HEAD', 'OPTIONS']
