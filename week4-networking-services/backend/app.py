from flask import Flask, jsonify
from flask_cors import CORS  # 1. Import CORS

app = Flask(__name__)
CORS(app)  # 2. Bật CORS cho toàn bộ ứng dụng

@app.route("/")
def home():
    return jsonify({
        "message": "Hello from Backend!",
        "status": "ok"
    })

@app.route("/api/data")
def data():
    return jsonify({
        "data": "This is data from backend"
    })

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)