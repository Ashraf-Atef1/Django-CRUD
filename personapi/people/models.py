from django.db import models
from django.core.validators import MinValueValidator, EmailValidator, RegexValidator
from django.contrib.auth.models import User

class Person(models.Model):
    name = models.CharField(
        max_length=100,
        validators=[RegexValidator(r'^[a-zA-Z\s]*$', 'Only letters and spaces allowed')]
    )
    age = models.PositiveIntegerField(
        validators=[MinValueValidator(1, 'Age must be at least 1')]
    )
    city = models.CharField(max_length=100)
    email = models.EmailField(
        unique=True,
        validators=[EmailValidator(message='Enter a valid email address')]
    )
    phone = models.CharField(
        max_length=17,
        unique=True,
        validators=[
            RegexValidator(
                r'^\+?1?\d{9,15}$',
                message="Phone number must be in format: '+999999999'. Up to 15 digits allowed."
            )
        ]
    )
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    created_by = models.ForeignKey(
        User,
        on_delete=models.SET_NULL,
        null=True,
        editable=False
    )
    objects = models.Manager()

    def __str__(self):
        return f"{self.name} ({self.email})"
