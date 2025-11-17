import streamlit as st
import tensorflow as tf
from tensorflow.keras.applications.mobilenet_v3 import preprocess_input
import numpy as np
from flask import Flask, jsonify
from pymongo import MongoClient
from prediction import prediction_bp
from Auth import auth_bp
from recommendation import cnv,dme,drusen,normal
import tempfile
from database import db
from flask_cors import CORS