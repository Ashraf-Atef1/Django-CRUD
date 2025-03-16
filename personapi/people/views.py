from rest_framework import viewsets, permissions, status
from rest_framework.decorators import action
from rest_framework.response import Response
from .models import Person
from .serializers import PersonSerializer
from django.db.models import Q

class PersonViewSet(viewsets.ModelViewSet):
    serializer_class = PersonSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    
    def get_queryset(self):
        queryset = Person.objects.all()
        filter_param = self.request.query_params.get('filter', '')
        
        if filter_param:
            queryset = queryset.filter(
                Q(name__icontains=filter_param) |
                Q(city__icontains=filter_param) |
                Q(email__icontains=filter_param) |
                Q(phone__icontains=filter_param)
            )
        
        return queryset.order_by('name')

    def perform_create(self, serializer):
        serializer.save(created_by=self.request.user)

    @action(detail=False, methods=['delete'])
    def bulk_delete(self, request):
        ids = request.data.get('ids', [])
        Person.objects.filter(id__in=ids).delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
