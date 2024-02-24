from flask import Flask, jsonify, request
from flask_cors import CORS
from utils import get_dummies, drop_columns, completeColumns, to_df, convert_types
import joblib

app = Flask(__name__)

CORS(app, resources={r"/model/*": {"origins": "http://localhost:3001"}})


@app.route('/model/predict', methods=['POST'])
def predict():
  try:
    data = request.json.get('data', None)
    print(data)

    if not data:
        return jsonify({'error': 'Falta la información para la predicción'}), 400

    data = to_df(data)
    data = drop_columns(data)
    data = get_dummies(data)
    data = completeColumns(data)
    prediction = model.predict(data.values)
    print(prediction)

    return jsonify({ 'res': prediction[0] }), 200

  except Exception as e:
    return jsonify({'error': str(e)}), 500
  

@app.route('/model/predictions', methods=['POST'])
def predictions():
  try:
    data = request.json.get('data', None)

    if not data:
        return jsonify({'error': 'Falta la información para la predicción'}), 400

    data = to_df(data)
    data = convert_types(data)
    data = drop_columns(data)
    data = get_dummies(data)
    data = completeColumns(data)
    prediction = model.predict(data.values)
    print(prediction)

    return jsonify({ 'res': prediction.tolist() }), 200

  except Exception as e:
    return jsonify({'error': str(e)}), 500
  

if __name__ == '__main__':
  model = joblib.load('modelo_Regresion_B.joblib')
  app.run(debug=True)