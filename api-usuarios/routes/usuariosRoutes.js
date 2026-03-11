const express = require("express");
const router = express.Router();

const usuariosControllers = require("../controllers/usuariosControllers")

router.get("/", usuariosControllers.obtenerUsuarios);

router.post("/", usuariosControllers.crearUsuario);

router.put("/editar", usuariosControllers.editarUsuario);

router.delete("/:id", usuariosControllers.eliminarUsuario);

router.get("/roles/lista", usuariosControllers.obtenerRoles);

router.get("/:id", usuariosControllers.obtenerUsuario);

module.exports = router;
