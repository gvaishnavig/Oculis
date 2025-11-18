from flask import Flask, jsonify, request
from flask_cors import CORS
import tensorflow as tf
import numpy as np
import tempfile
from prediction import prediction_bp
from Auth import auth_bp
from database import db
from recommendation import cnv, dme, drusen, normal

app = Flask(__name__)

# Allow frontend running on Vite (5173)
# CORS(app, origins=["http://localhost:5173"])
CORS(app, origins=["http://localhost:5173"], supports_credentials=True)
# Load Model ONCE when the server starts
try:
    global MODEL
    #MODEL = tf.keras.models.load_model("Trained_Model.h5")
    MODEL = tf.keras.models.load_model("Trained_Model.h5", compile=False)
    print("TensorFlow model loaded successfully.")
    
    global RECOMMENDATIONS
    RECOMMENDATIONS = {"CNV": cnv, "DME": dme, "DRUSEN": drusen, "NORMAL": normal}
    
except Exception as e:
    print(f"ERROR: Failed to load TensorFlow model: {e}")
    MODEL = None # Set to None so the route can handle the failure

# Register other routes
app.register_blueprint(auth_bp, url_prefix="/auth")
app.register_blueprint(prediction_bp, url_prefix="/api")  # Optional prefix

@app.route("/")
def home():
    return jsonify({"message": "Welcome to Oculis API Backend"})

# ----------- FINAL WORKING PREDICTION ROUTE ------------
""" @app.route("/predict", methods=["POST"])
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

    return jsonify({"prediction": result}) """

@app.route("/predict", methods=["POST"])
def predict():
    if "file" not in request.files:
        return jsonify({"error": "No file uploaded"}), 400

    file = request.files["file"]

    try:

        import os
        # Save uploaded file temporarily
        """ with tempfile.NamedTemporaryFile(delete=False, suffix=file.filename) as tmp:
            tmp.write(file.read())
            file_path = tmp.name """

        suffix = os.path.splitext(file.filename)[1]
        with tempfile.NamedTemporaryFile(delete=False, suffix=suffix) as tmp:
            tmp.write(file.read())
            file_path = tmp.name

        # Check model is loaded
        if MODEL is None:
            return jsonify({"error": "Model not loaded"}), 500

        # Restrict to supported image types
        if not file.filename.lower().endswith(('.png', '.jpg', '.jpeg')):
            return jsonify({"error": "Unsupported file type"}), 400

        # Run prediction
        #model = tf.keras.models.load_model("Trained_Model.keras")
        #img = tf.keras.utils.load_img(file_path, target_size=(224, 224))

        try:
            img = tf.keras.utils.load_img(file_path, target_size=(224, 224))
        except Exception as e:
            print(f"Failed to load image {file_path}: {e}")
            return jsonify({"error": "Failed to load image"}), 500

        x = tf.keras.utils.img_to_array(img)
        x = np.expand_dims(x, axis=0)
        
        predictions = MODEL.predict(x)
        class_names = ['CNV', 'DME', 'DRUSEN', 'NORMAL']
        result = class_names[np.argmax(predictions)]
        confidence = str(round(np.max(predictions) * 100, 2)) + "%"

        # Dynamic recommendations from recommendation.py
        from recommendation import cnv, dme, drusen, normal
        recommendations = {"CNV": cnv, "DME": dme, "DRUSEN": drusen, "NORMAL": normal}
        recommendation = RECOMMENDATIONS.get(result, "")

        # Return prediction + confidence + recommendation
        return jsonify({
            "prediction": result,
            "confidence": confidence,
            "recommendation": recommendation
        })

    except Exception as e:
        # Return error if something fails
        #return jsonify({"error": str(e)}), 500
        import traceback
        print("Error during prediction:\n", traceback.format_exc())
        return jsonify({"error": str(e)}), 500


# --------------------------------------------------------

if __name__ == "__main__":
    app.run(debug=True)
