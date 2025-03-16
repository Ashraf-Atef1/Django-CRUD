from rest_framework import serializers
from .models import Person

class PersonSerializer(serializers.ModelSerializer):
    class Meta:
        model = Person
        fields = '__all__'
        read_only_fields = ('created_at', 'updated_at', 'created_by')

    def validate_email(self, value):
        instance = self.instance
        queryset = Person.objects.filter(email__iexact=value)
        
        if instance:  # Update operation
            queryset = queryset.exclude(pk=instance.pk)
            
        if queryset.exists():
            raise serializers.ValidationError("Email already exists")
        return value

    def validate_phone(self, value):
        instance = self.instance
        queryset = Person.objects.filter(phone__exact=value)
        
        if instance:  # Update operation
            queryset = queryset.exclude(pk=instance.pk)
            
        if queryset.exists():
            raise serializers.ValidationError("Phone number already exists")
        return value
