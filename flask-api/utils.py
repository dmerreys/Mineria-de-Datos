import pandas as pd


def to_df(arr):
	columns = ['Nombre', 'Apellido', 'Cedula', 'AMIE',
							'isec', 'Cod_Provincia',
							'Umbral_Geografico',
							'tp_sexo', 'etnibee', 'Sostenimiento', 'grado', 'Regimen_Escolar',
							'quintil', 'Area', 'nm_regi', 'Zona', 'Categoria_Umbral',
							'Categoria_isec', 'Edad']
	return pd.DataFrame(arr, columns=columns)


def drop_columns(df):
	columns_to_drop = ['AMIE',
											'Umbral_Geografico', 'Cod_Provincia', 'isec', 'Nombre', 'Apellido',
											'Cedula',]
	df = df.drop(columns=columns_to_drop)
	return df


def get_dummies(df):
	df = pd.get_dummies(df)
	return df


def completeColumns(df):
	columnas_finales = ['Edad',
											'tp_sexo_Hombre', 'tp_sexo_Mujer', 'etnibee_1', 'etnibee_2', 'etnibee_3', 'etnibee_4', 'etnibee_5',
											'Sostenimiento_4', 'Sostenimiento_3', 'Sostenimiento_2', 'Sostenimiento_1',
											'grado_10', 'grado_3', 'grado_4', 'grado_7', 'Regimen_Escolar_1', 'Regimen_Escolar_2',
											'quintil_1', 'quintil_2', 'quintil_3', 'quintil_4', 'quintil_5', 'Area_Rural', 'Area_Urbana',
											'nm_regi_1', 'nm_regi_2', 'nm_regi_3', 'nm_regi_4', 'nm_regi_90', 'Zona_1', 'Zona_2', 'Zona_3',
											'Zona_4', 'Zona_5', 'Zona_6', 'Zona_7', 'Zona_8', 'Zona_9', 'Zona_90', 'Categoria_Umbral_Alta',
											'Categoria_Umbral_Muy Alta', 'Categoria_Umbral_Muy Bajo', 'Categoria_isec_Alto', 'Categoria_isec_Bajo',
											'Categoria_isec_Medio', 'Categoria_isec_Muy Alto', 'Categoria_isec_Muy Bajo']
	
	for columna in columnas_finales:
		if columna not in df.columns:
				df[columna] = 0

	# Ordenar las columnas para que coincidan con el orden original
	df = df[columnas_finales]
	return df
