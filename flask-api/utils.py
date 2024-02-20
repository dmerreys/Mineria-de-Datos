import pandas as pd
import numpy as np

def to_df(arr):
  columns = ['Nombre', 'Apellido', 'Cedula',
              'Edad', 'tp_sexo', 'etnibee', 'nm_regi', 'AMIE', 'Area', 
              'quintil', 'isec', 'Categoria_isec', 'Cat_Provincia', 
              'grado', 'Zona', 'Regimen_Escolar', 'Sostenimiento', 
              'Umbral_Geografico', 'Categoria_Umbral']
  return pd.DataFrame(np.array(arr), columns=columns)


def drop_columns(df):
    columns_to_drop = ['AMIE', 'financiamiento', 'Cod_Canton', 'Cod_Parroquia',
                       'Umbral_Geografico', 'codigo', 'inev', 'Categoria_Nota', 'id_dist', 'Cod_Provincia', 'isec']
    df = df.drop(columns=columns_to_drop)
    return df


def get_dummies(df):
    categorical_columns = df.select_dtypes(include=['object']).columns
    df = pd.get_dummies(df, columns=categorical_columns)
    return df
