FROM python:3.11-slim

ENV PYTHONUNBUFFERED 1
ENV PYTHONDONTWRITEBYTECODE 1

WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

RUN python manage.py migrate --noinput

CMD ["sh", "-c", "python manage.py migrate && \
    (python manage.py createsuperuser --noinput --username admin --email admin@example.com || true) && \
    python manage.py runserver 0.0.0.0:8000"]