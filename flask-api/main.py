from flask import Flask, jsonify, request
from flask_cors import CORS
from utils import get_dummies, drop_columns
import joblib

app = Flask(__name__)

CORS(app, resources={r"/predict/*": {"origins": "http://localhost:3001"}})

#@cross_origin
@app.route('/predict', methods=['POST'])
def predict():
  try:
    data = request.json.get('data', None)

    if not data:
        return jsonify({'error': 'Falta la información para la predicción'}), 400
    
    # prediction = model.predict(data)
    # print(prediction)
    # return build_actual_response(jsonify({ 'prediction': prediction[0] }))
    return jsonify({ 'prediction': data }), 200

  except Exception as e:
    return jsonify({'error': str(e)}), 500
  
# def build_preflight_response():
#   response = make_response()
#   response.headers.add("Access-Control-Allow-Origin", "*")
#   response.headers.add('Access-Control-Allow-Headers', "*")
#   response.headers.add('Access-Control-Allow-Methods', "*")
#   return response

# def build_actual_response(response):
#   response.headers.add("Access-Control-Allow-Origin", "*")
#   return response

if __name__ == '__main__':
  model = joblib.load('modelo_Regresion_B.joblib')
  app.run(debug=True)