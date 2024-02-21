from flask import Flask, jsonify, request
from flask_cors import CORS
from utils import get_dummies, drop_columns, completeColumns, to_df
import joblib
import pandas as pd
import numpy as np

app = Flask(__name__)

CORS(app, resources={r"/predict/*": {"origins": "http://localhost:3001"}})

# def to_df(arr):
# 	columns = ['Nombre', 'Apellido', 'Cedula', 'AMIE',
# 							'isec', 'Cod_Provincia',
# 							'Umbral_Geografico',
# 							'tp_sexo', 'etnibee', 'Sostenimiento', 'grado', 'Regimen_Escolar',
# 							'quintil', 'Area', 'nm_regi', 'Zona', 'Categoria_Umbral',
# 							'Categoria_isec', 'Edad']
# 	return pd.DataFrame(arr, columns=columns)

#@cross_origin
@app.route('/predict', methods=['POST'])
def predict():
  try:
    data = request.json.get('data', None)

    if not data:
        return jsonify({'error': 'Falta la información para la predicción'}), 400

    data = to_df(data)
    data = drop_columns(data)
    data = get_dummies(data)
    data = completeColumns(data)
    prediction = model.predict(data.values)
    print(prediction)

    # return build_actual_response(jsonify({ 'prediction': prediction[0] }))
    return jsonify({ 'res': prediction[0] }), 200

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