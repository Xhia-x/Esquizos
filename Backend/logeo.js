const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true, // Asegura que los nombres de usuario sean únicos
    trim: true, // Elimina espacios en blanco al principio y al final
    minlength: 3, // Longitud mínima para el nombre de usuario
    maxlength: 20 // Longitud máxima para el nombre de usuario
  },
  password: {
    type: String,
    required: true,
    minlength: 6 // Longitud mínima para la contraseña
  },
  // Puedes añadir más campos aquí si es necesario
});


const User = mongoose.model('logeo', userSchema);

module.exports = User;