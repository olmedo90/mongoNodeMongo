const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RolSchema = new Schema({
  rol:  String,
  estado:{
      type: Boolean,
      default:true
  }

},{
  versionKey: false,
  timestamps: true
});

// Crear el modelo
const RolModel = mongoose.model('rol', RolSchema);// clientes nombre de la coleccion

module.exports = RolModel;