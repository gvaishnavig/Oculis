from flask import Flask, jsonify, request
from flask_cors import CORS
import tensorflow as tf
import numpy as np
import tempfile
from prediction import prediction_bp
from Auth import auth_bp
from database import db

app = Flask(__name__)

# Allow frontend running on Vite (5173)
CORS(app, origins=["http://localhost:5173"])

# Register other routes
app.register_blueprint(auth_bp, url_prefix="/auth")
app.register_blueprint(prediction_bp, url_prefix="/api")  # Optional prefix

@app.route("/")
def home():
    return jsonify({"message": "Welcome to Oculis API Backend"})

# ----------- FINAL WORKING PREDICTION ROUTE ------------
@app.route("/predict", methods=["POST"])
def predict():
    if "file" not in request.files:
        return jsonify({"error": "No file uploaded"}), 400

    file = request.files["file"]

    # Save uploaded file temporarily
    with tempfile.NamedTemporaryFile(delete=False, suffix=file.filename) as tmp:
        tmp.write(file.read())
        file_path = tmp.name

    # Run prediction
    model = tf.keras.models.load_model("Trained_Model.keras")
    img = tf.keras.utils.load_img(file_path, target_size=(224, 224))
    x = tf.keras.utils.img_to_array(img)
    x = np.expand_dims(x, axis=0)
    predictions = model.predict(x)

    class_names = ['CNV', 'DME', 'DRUSEN', 'NORMAL']
    result = class_names[np.argmax(predictions)]

    return jsonify({"prediction": result})

# --------------------------------------------------------

if __name__ == "__main__":
    app.run(debug=True)
