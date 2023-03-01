const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const asignadoSchema = new Schema({
  rol:  String,
  users_id:{
      type:mongoose.Types.ObjectId
  }

},{
  versionKey: false,
  timestamps: true
});

// Crear el modelo
const asignacionModel = mongoose.model('asignacion_users', asignadoSchema);// clientes nombre de la coleccion

module.exports = asignacionModel;