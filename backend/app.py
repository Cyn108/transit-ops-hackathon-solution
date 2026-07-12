from flask import Flask, jsonify, request
from flask_cors import CORS
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity
from models import db, User, Vehicle, Driver, Trip, Maintenance, Expense
import os
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///transportops.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['JWT_SECRET_KEY'] = os.getenv('JWT_SECRET_KEY')

db.init_app(app)
CORS(app)
jwt = JWTManager(app)

with app.app_context():
    db.create_all()

@app.route('/api/login', methods=['POST'])
def login():
    data = request.get_json()
    user = User.query.filter_by(email=data['email'], password=data['password']).first()
    if user:
        access_token = create_access_token(identity={'id': user.id, 'role': user.role})
        return jsonify({'access_token': access_token, 'role': user.role})
    return jsonify({'error': 'Invalid credentials'}), 401

@app.route('/api/vehicles', methods=['GET'])
@jwt_required()
def get_vehicles():
    vehicles = Vehicle.query.all()
    return jsonify([{
        'id': v.id, 'vehicle_no': v.vehicle_no, 'model': v.model, 'type': v.type,
        'capacity': v.capacity, 'reg_expiry': v.reg_expiry, 'insurance_expiry': v.insurance_expiry, 'status': v.status
    } for v in vehicles])

@app.route('/api/drivers', methods=['GET'])
@jwt_required()
def get_drivers():
    drivers = Driver.query.all()
    return jsonify([{
        'id': d.id, 'name': d.name, 'license_no': d.license_no, 'license_expiry': d.license_expiry,
        'experience': d.experience, 'safety_score': d.safety_score, 'status': d.status, 'assigned_vehicle': d.assigned_vehicle
    } for d in drivers])

@app.route('/api/trips', methods=['GET'])
@jwt_required()
def get_trips():
    trips = Trip.query.all()
    return jsonify([{
        'id': t.id, 'trip_id': t.trip_id, 'source': t.source, 'destination': t.destination,
        'vehicle': t.vehicle, 'driver': t.driver, 'start_date': t.start_date, 'end_date': t.end_date, 'status': t.status
    } for t in trips])

@app.route('/api/maintenance', methods=['GET'])
@jwt_required()
def get_maintenance():
    maintenance = Maintenance.query.all()
    return jsonify([{
        'id': m.id, 'vehicle_no': m.vehicle_no, 'type': m.type, 'last_service': m.last_service,
        'next_service': m.next_service, 'kms_due': m.kms_due, 'status': m.status, 'est_cost': m.est_cost
    } for m in maintenance])

@app.route('/api/expenses', methods=['GET'])
@jwt_required()
def get_expenses():
    expenses = Expense.query.all()
    return jsonify([{
        'id': e.id, 'date': e.date, 'trip_id': e.trip_id, 'type': e.type,
        'description': e.description, 'amount': e.amount, 'status': e.status
    } for e in expenses])
    
@app.route('/')
def home():
    return jsonify({"message": "Backend is running successfully!"})

if __name__ == '__main__':
    
    app.run(host="0.0.0.0", port=5000)
