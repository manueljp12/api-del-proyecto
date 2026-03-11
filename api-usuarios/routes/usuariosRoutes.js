const express = require("express");
const router = express.Router();

const usuariosControllers = require("../controllers/usuariosControllers")

router.get("/", usuariosControllers.obtenerUsuarios);

router.get("/id:", usuariosControllers.obtenerUsuario);

router.post("/", usuariosControllers.crearUsuario);

router.put("/", usuariosControllers.editarUsuario);

router.delete("/id:", usuariosControllers.eliminarUsuario);

router.get("/roles/lista", usuariosControllers.obtenerRoles);

module.exports = router;