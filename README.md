# transit-ops-hackathon-solution
# 🚚 TransportOps Dashboard

A modern Fleet & Transport Management Dashboard built using *React.js* for the frontend and *Flask* for the backend. The application helps transport companies manage vehicles, drivers, trips, maintenance schedules, expenses, reports, and user roles through a clean and responsive dashboard.

---

## 📌 Features

- 📊 Interactive Dashboard
- 🚛 Vehicle Management
- 👨‍✈️ Driver Management
- 🗺️ Trip Management
- 🔧 Maintenance Tracking
- 💰 Fuel & Expense Management
- 📈 Reports & Analytics
- 🔐 JWT Authentication
- 👥 Role-Based Access Control (RBAC)
- 📱 Responsive UI

---

## 🛠️ Tech Stack

### Frontend
- React.js
- React Router
- Tailwind CSS
- Recharts
- Axios
- Heroicons

### Backend
- Flask
- Flask-SQLAlchemy
- Flask-JWT-Extended
- Flask-CORS
- Python Dotenv

### Database
- SQLite

---

## 📂 Project Structure


transportops-dashboard/
│
├── backend/
│   ├── app.py
│   ├── models.py
│   ├── requirements.txt
│   ├── .env
│   └── transportops.db
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.js
│   │   └── index.js
│   ├── package.json
│   └── tailwind.config.js
│
└── README.md


---

# Modules

### Dashboard
- Fleet Overview
- Active Trips
- Fleet Utilization
- Monthly Expenses
- Recent Activities

### Vehicle Management
- View Vehicles
- Search Vehicles
- Vehicle Status
- Registration & Insurance Tracking

### Driver Management
- Driver Records
- License Tracking
- Safety Score
- Assigned Vehicles

### Trip Management
- Trip Scheduling
- Source & Destination
- Driver Assignment
- Trip Status

### Maintenance
- Service Schedule
- Upcoming Services
- Estimated Cost
- Maintenance Status

### Expense Management
- Fuel Expenses
- Toll Expenses
- Expense Approval
- Monthly Summary

### Reports
- Revenue Analysis
- Expense Analysis
- Fleet Utilization
- Top Drivers

### Settings
- User Management
- Role-Based Access
- System Settings
- Audit Logs

---

# Installation

## Clone Repository

bash
git clone https://github.com/your-username/transportops-dashboard.git
cd transportops-dashboard


---

## Backend Setup

bash
cd backend

python -m venv venv

# Windows
venv\Scripts\activate

# Linux/Mac
source venv/bin/activate

pip install -r requirements.txt

python app.py


Backend will start on:


http://localhost:5000


---

## Frontend Setup

bash
cd frontend

npm install

npm start


Frontend will start on:


http://localhost:3000


---

# Environment Variables

Create a file named .env inside the backend folder.


JWT_SECRET_KEY=your-secret-key


---

# API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | /api/login | User Login |
| GET | /api/vehicles | Get Vehicles |
| GET | /api/drivers | Get Drivers |
| GET | /api/trips | Get Trips |
| GET | /api/maintenance | Get Maintenance |
| GET | /api/expenses | Get Expenses |

---

# Screens Included

- Login
- Dashboard
- Vehicles
- Drivers
- Trips
- Maintenance
- Expenses
- Reports
- Settings

---

# Future Improvements

- PostgreSQL Support
- Docker Deployment
- Email Notifications
- GPS Integration
- Live Vehicle Tracking
- Predictive Maintenance
- AI-based Analytics
- Multi-language Support

---

# Author

Developed as a Transport Management Dashboard project using React and Flask.

---

# License

This project is created for educational and demonstration purposes.
