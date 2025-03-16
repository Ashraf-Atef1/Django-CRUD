#!/bin/bash

# Personapi Setup
echo "Setting up personapi..."
cd personapi
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
python manage.py migrate

# Cleanup existing admin user
python manage.py shell -c "from django.contrib.auth.models import User; User.objects.filter(username='admin', is_superuser=True).delete()"

# Create superuser with proper password
python manage.py shell <<EOF
from django.contrib.auth import get_user_model
User = get_user_model()
admin = User.objects.create_superuser(
    username='admin',
    email='admin@example.com',
    password='ashraf123'
)
admin.save()
EOF

# Kill existing server if running
sudo lsof -t -i tcp:8000 | xargs kill -9

echo "Creating initial data..."
source venv/bin/activate

python manage.py shell <<EOF
from django.contrib.auth import get_user_model
from people.models import Person

User = get_user_model()

# Create regular users
for i in range(1, 6):
    user = User.objects.create_user(
        username=f"user{i}",
        password=f"user{i}@123",
        email=f"user{i}@example.com"
    )
    user.save()

# Create sample person records
sample_data = [
    {'name': 'Alice Smith', 'age': 28, 'city': 'New York', 'email': 'alice@example.com', 'phone': '+1234567890'},
    {'name': 'Bob Johnson', 'age': 35, 'city': 'London', 'email': 'bob@example.com', 'phone': '+44123456789'},
    {'name': 'Charlie Brown', 'age': 42, 'city': 'Paris', 'email': 'charlie@example.com', 'phone': '+33123456789'},
    {'name': 'Diana Miller', 'age': 31, 'city': 'Berlin', 'email': 'diana@example.com', 'phone': '+49123456789'},
    {'name': 'Evan Garcia', 'age': 26, 'city': 'Tokyo', 'email': 'evan@example.com', 'phone': '+81123456789'}
]

for data in sample_data:
    Person.objects.get_or_create(**data)

print("Sample data created successfully")
EOF
echo "Data setup complete!"

python manage.py runserver &
cd ..

# Frontend Setup
echo "Setting up frontend..."
cd frontend
npm install
npm run build
npm start
cd ..

echo "Deployment complete!"
