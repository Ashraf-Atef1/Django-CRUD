# Person Management System

A full-stack CRUD application for managing person records with Django REST Framework backend and React frontend.

## Features

### Backend (Django)

- REST API endpoints for CRUD operations
- JWT Authentication
- Advanced filtering
- Input validation
- Swagger/OpenAPI documentation
- SQLite database (production-ready DB config available)

### Frontend (React)

- Responsive UI with Material-UI
- Real-time updates
- Form validation
- Click-to-edit functionality
- Authentication handling
- Error boundaries

## Technologies

![Django](https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)

## Getting Started

### Prerequisites

- Docker (with Compose plugin)
- Node.js 18+
- Python 3.11+
- npm 9+

### Local Deployment

A `deployment.sh` script is provided to automate the local deployment process. The `.env` file uploaded for easy configuration.

```bash
bash deployment.sh
```

#### Backend Setup

```bash
cd personapi
python -m venv venv
source venv/bin/activate  # Linux/Mac
# venv\Scripts\activate  # Windows
pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
```

#### Frontend Setup

```bash
cd ../frontend
npm install
npm run dev
```

### Docker Deployment

```bash
# Build and start containers
docker compose up --build -d

# Create initial data
docker compose exec personapi python manage.py createsuperuser
```

### Access

- **Frontend:** [http://localhost:3000](http://localhost:3000)
- **Backend API:** [http://localhost:8000/api/persons/](http://localhost:8000/api/persons/)
- **Admin Interface:** [http://localhost:8000/admin](http://localhost:8000/admin)
- **API Documentation:** [http://localhost:8000/api/docs/](http://localhost:8000/api/docs/)

### Default Admin Credentials

- **Username:** `admin`
- **Password:** `ashraf123`

### Sample Users

- **Usernames:** `user1` to `user5`
- **Password:** `userX@123` (replace `X` with `1-5`)

## API Documentation

Interactive Swagger documentation available at `/api/docs/` endpoint.

#### Example API request:

```http
GET /api/persons/?filter=New
Authorization: Bearer <your-jwt-token>
```

## Project Structure

```plaintext
person-management/
├── personapi/               # Django backend
│   ├── people/              # Main app
│   ├── personapi/           # Project config
│   └── Dockerfile
├── frontend/                # React frontend
│   ├── src/                 # Source files
│   └── Dockerfile
├── docker-compose.yml
├── deployment.sh            # Local deployment script
└── README.md
```

## Troubleshooting

### Common Issues:

- **Port conflicts:** Ensure ports `3000` and `8000` are available.
- **Docker errors:** Clean build with:
  ```bash
  docker compose down -v && docker compose up --build
  ```
- **Migration issues:** Run:
  ```bash
  docker compose exec personapi python manage.py migrate
  ```
