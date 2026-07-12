from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(120), nullable=False)
    role = db.Column(db.String(20), nullable=False)

class Vehicle(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    vehicle_no = db.Column(db.String(20), unique=True, nullable=False)
    model = db.Column(db.String(50), nullable=False)
    type = db.Column(db.String(50), nullable=False)
    capacity = db.Column(db.String(20), nullable=False)
    reg_expiry = db.Column(db.String(20), nullable=False)
    insurance_expiry = db.Column(db.String(20), nullable=False)
    status = db.Column(db.String(20), nullable=False)

class Driver(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)
    license_no = db.Column(db.String(20), unique=True, nullable=False)
    license_expiry = db.Column(db.String(20), nullable=False)
    experience = db.Column(db.String(20), nullable=False)
    safety_score = db.Column(db.Integer, nullable=False)
    status = db.Column(db.String(20), nullable=False)
    assigned_vehicle = db.Column(db.String(20), nullable=True)

class Trip(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    trip_id = db.Column(db.String(20), unique=True, nullable=False)
    source = db.Column(db.String(50), nullable=False)
    destination = db.Column(db.String(50), nullable=False)
    vehicle = db.Column(db.String(20), nullable=False)
    driver = db.Column(db.String(50), nullable=False)
    start_date = db.Column(db.String(20), nullable=False)
    end_date = db.Column(db.String(20), nullable=False)
    status = db.Column(db.String(20), nullable=False)

class Maintenance(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    vehicle_no = db.Column(db.String(20), nullable=False)
    type = db.Column(db.String(20), nullable=False)
    last_service = db.Column(db.String(20), nullable=False)
    next_service = db.Column(db.String(20), nullable=False)
    kms_due = db.Column(db.Integer, nullable=False)
    status = db.Column(db.String(20), nullable=False)
    est_cost = db.Column(db.Float, nullable=False)

class Expense(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    date = db.Column(db.String(20), nullable=False)
    trip_id = db.Column(db.String(20), nullable=False)
    type = db.Column(db.String(20), nullable=False)
    description = db.Column(db.String(100), nullable=False)
    amount = db.Column(db.Float, nullable=False)
    status = db.Column(db.String(20), nullable=False)
