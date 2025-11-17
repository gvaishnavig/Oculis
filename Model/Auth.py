# auth.py
from flask import Blueprint, request, jsonify
from werkzeug.security import generate_password_hash, check_password_hash
from database import users_collection

auth_bp = Blueprint('auth', __name__)

# 🧠 Register User
@auth_bp.route("/register", methods=["POST"])
def register():
    data = request.get_json()
    name = data.get("name")
    email = data.get("email")
    password = data.get("password")
    role = data.get("role")  # "patient", "doctor", "admin"

    if users_collection.find_one({"email": email}):
        return jsonify({"error": "User already exists"}), 400

    hashed_pw = generate_password_hash(password)
    users_collection.insert_one({
        "name": name,
        "email": email,
        "password": hashed_pw,
        "role": role
    })

    return jsonify({"message": "✅ Registration successful!"}), 201


# 🔐 Login User
@auth_bp.route("/login", methods=["POST"])
def login():
    data = request.get_json()
    email = data.get("email")
    password = data.get("password")

    user = users_collection.find_one({"email": email})
    if not user or not check_password_hash(user["password"], password):
        return jsonify({"error": "Invalid email or password"}), 401

    return jsonify({
        "message": "✅ Login successful",
        "user": {"name": user["name"], "role": user["role"]}
    })