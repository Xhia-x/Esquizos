const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true, // Asegura que los nombres de usuario sean únicos
    trim: true // Elimina espacios en blanco al principio y al final
  },
  password: {
    type: String,
    required: true,
    minlength: 6 // Longitud mínima para la contraseña
  },
});

const User = mongoose.model('User', userSchema, 'User');
module.exports = User;
