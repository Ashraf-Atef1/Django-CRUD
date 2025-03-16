from django.urls import path, include
from rest_framework import routers
from .views import PersonViewSet
from drf_spectacular.views import SpectacularAPIView, SpectacularSwaggerView

router = routers.DefaultRouter()
router.register(r'persons', PersonViewSet, basename='person')

urlpatterns = [
    path('', include(router.urls)),
    # API documentation endpoints
    path('schema/', SpectacularAPIView.as_view(), name='schema'),
    path('docs/', SpectacularSwaggerView.as_view(url_name='schema'), name='swagger-ui'),
]
