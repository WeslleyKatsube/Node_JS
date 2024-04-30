const express = require ('express');
const router = express.Router();

// referência a controllers que serão utilizados nas rotas
const UsuariosController = require ('../controllers/usuario');

-
router.get('/usuario', UsuariosController.listarUsuarios);
router.post('/usuario', UsuariosController.cadastrarUsuarios); //body
router.patch('/usuario/:usu_id', UsuariosController.editarUsuarios); // params (URL) e body
router.delete('/usuario/:usu_id', UsuariosController.apagarUsuarios); //params (URL)
router.delete('/usuario/del/:usu_id', UsuariosController.ocultarUsuario); //params (URL)
router.post('/usuario/login', UsuariosController.login); //body

module.exports = router;