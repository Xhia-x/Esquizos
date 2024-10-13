    var express = require('express');

    var userController = require('../src/user/userController');
    var partidaController = require('../src/partida/partidaController');
    var invitacionController = require('../src/invitacion/invitacionController');
    const router = express.Router();

    router.route('/user/login').post(userController.loginUserControllerFn);
    router.route('/user/register').post(userController.registerUserControllerFn);
    router.route('/user/:username').get(userController.buscarUserControllerFn);

    router.route('/partida').post(partidaController.registerPartidaControllerFn);
    router.route('/partida/:nombrePartida').get(partidaController.buscarPartidaControllerFn);
    router.route('/partida/usuario/:nombreUsuario').get(partidaController.cargarPartidasUsusarioControllerFn);

    router.route('/invitacion').post(invitacionController.crearInvitacionControllerFn);
    router.route('/invitacion/:nombreUsuario').get(invitacionController.cargarInvitacionesUsusarioControllerFn);

    module.exports = router; 