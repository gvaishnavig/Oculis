# auth.py
from flask import Blueprint, request, jsonify
from werkzeug.security import generate_password_hash, check_password_hash
from database import users_collection

auth_bp = Blueprint('auth', __name__)

# 🧠 Register User
@auth_bp.route("/register", methods=["POST"])
def register():
    data = request.get_json()
    if not data:
        return jsonify({"success": False, "message": "No JSON received"}), 400
    
    name = data.get("name")
    email = data.get("email")
    password = data.get("password")
    role = data.get("role")  # "patient", "doctor", "admin"
    
    print("Received registration data:", data)

    if users_collection.find_one({"email": email}):
        return jsonify({"success": False, "message": "User already exists"}), 400

    hashed_pw = generate_password_hash(password)
    users_collection.insert_one({
        "name": name,
        "email": email,
        "password": hashed_pw,
        "role": role
    })

    # Return registered user info for frontend convenience
    return jsonify({
        "message": "✅ Registration successful!",
        "user": {"name": name, "email": email, "role": role}
    }), 201


# 🔐 Login User
@auth_bp.route("/login", methods=["POST"])
def login():
    data = request.get_json()
    if not data:
        return jsonify({"success": False, "message": "No JSON received"}), 400
    
    email = data.get("email")
    password = data.get("password")

    user = users_collection.find_one({"email": email})
    if not user or not check_password_hash(user["password"], password):
        return jsonify({"success": False, "message": "Invalid email or password"}), 401

    return jsonify({
        "message": "✅ Login successful",
        "user": {
            "name": user["name"],
            "email": user["email"],
            "role": user["role"]
        }
    })
