# prediction.py
from flask import Blueprint, request, jsonify
from tensorflow.keras.models import load_model
from PIL import Image
import numpy as np
from database import predictions_collection

prediction_bp = Blueprint('prediction', __name__)

# Load ML model once
model = None

def get_model():
    global model
    if model is None:
        print("Loading model...")
        model = load_model("Trained_Model.keras")
        print("Model loaded successfully")
        return model

def preprocess_image(image_path):
    img = Image.open(image_path).convert("RGB")
    img = img.resize((224, 224))  # Change based on your model
    img = np.array(img) / 255.0
    img = np.expand_dims(img, axis=0)
    return img

@prediction_bp.route("/predict", methods=["POST"])
def predict():

    model = get_model()
    if 'image' not in request.files:
        return jsonify({"error": "No image file uploaded"}), 400

    image = request.files["image"]
    image_path = "temp_image.jpg"
    image.save(image_path)

    processed_img = preprocess_image(image_path)
    prediction = model.predict(processed_img)

    # Example: assume output is [probability of disease]
    result = float(prediction[0][0])

    # Store prediction in MongoDB
    predictions_collection.insert_one({
        "patient_email": request.form.get("email"),
        "result": result
    })

    return jsonify({
        "message": "✅ Prediction successful!",
        "result": result
    })