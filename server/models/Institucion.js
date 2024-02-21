import mongoose from 'mongoose';

const institucionSchema = new mongoose.Schema({
    Anio_lectivo: String,
    Zona: String,
    Provincia: String,
    Cod_Provincia: String,
    Canton: String,
    Cod_Canton: String,
    Parroquia: String,
    Cod_Parroquia: String,
    Nombre_Institucion: String,
    AMIE: String,
    Escolarizacion: String,
    Tipo_Educacion: String,
    Sostenimiento: String,
    Area: String,
    Regimen_Escolar: String,
    Jurisdiccion: String,
    Modalidad: String,
    Jornada: String,
    Acceso_Edificio: String,
    Total_estudiantes: String,
    Promovidos: String,
    No_promovidos: String,
    Abandono: String
});

const Institucion = mongoose.model('historicos', institucionSchema);

export default Institucion;
