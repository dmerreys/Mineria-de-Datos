import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    nombre: {
      type: String,      
      min: 2,
      max: 100,
    },
    apellido: {
      type: String,     
      min: 2,
      max: 100,
    },
    cedula: {
      type: String,      
      min: 2,
      max: 100,
    },
    edad: {
      type: Number,      
    },    
    distrito: String,
    sexo: String,
    etnia: String,
    provincia: String,
    area: String,
    regionNatural: String,
    regimenEscolar: String,
    sostenimiento: String,
    quintil: String,
    isec: Number,  
    catIsec: String, 
    zona: String,
    grado: String,
    umbralGeo: Number,    
    amie: String,
    canton: String,
    parroquia: String,
    
    abandono: Number,   

  },
  { timestamps: true }
);

const Students = mongoose.model("estudiantes", UserSchema);
export default Students;
