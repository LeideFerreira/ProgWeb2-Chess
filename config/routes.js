const express = require('express');
const router = express.Router();
const mainController = require('../app/controllers/main');
const areaController = require('../app/controllers/area');
const cursoController = require('../app/controllers/curso');
const userController = require('../app/controllers/user');

//mainController
router.get('/', mainController.index);
router.get('/about',mainController.about);
router.get('/socket',mainController.socket);


//areaController
router.get('/area',areaController.index);

//cursoController
router.get('/curso',cursoController.index);
router.get('/curso/read/:id',cursoController.read);
router.get('/curso/create',cursoController.create);
router.post('/curso/create',cursoController.create);
router.get('/curso/update/:id',cursoController.update);
router.post('/curso/update/:id',cursoController.update);
router.post('/curso/remove/:id',cursoController.remove);

//userController
router.get('/user',userController.index);
router.get('/user/create',userController.create);
router.post('/user/create',userController.create);
router.get('/siginup',userController.create);
router.post('/siginup',userController.create);


module.exports = router;