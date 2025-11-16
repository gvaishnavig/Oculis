from pymongo import MongoClient
client = MongoClient("mongodb+srv://riyapatidar027:YGv99SfCWokBYGbd@cluster0.uolyo.mongodb.net/")
db= client["OculisDB"]
users_collection = db["users"]
predictions_collection = db["predictions"]