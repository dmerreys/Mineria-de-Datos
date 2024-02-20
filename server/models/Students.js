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
    sexo: String,
    etnia: String,
    regionNatural: String,
    area: String,
    quintil: String,
    isec: Number, 
    catIsec: String, 
    provincia: String,    
    amie: String,
    distrito: String,   
    grado: String,    
    zona: String,
    regimenEscolar: String,
    sostenimiento: String,    
    umbralGeo: Number,  
    abandono: Number,
  },
  { timestamps: true }
);

const Students = mongoose.model("estudiantes", UserSchema);
export default Students;
