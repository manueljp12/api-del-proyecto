const usuariosService = require("../services/usuariosServices");

async function obtenerUsuarios(req, res) {
    const result = await usuariosService.obtenerUsuarios();
    res.json(result)
}

async function obtenerUsuario(req, res) {
    const { id } = req.params;
    const result = await usuariosService.obtenerUsuarioPorId(id);
    res.json(result);
}

async function crearUsuario(req, res) {
    const data  = req.body;
    const result = await usuariosService.crearUsuario(data);
    res.json(result);
}

async function editarUsuario(req, res) {
    const data = req.body;
    const result = await usuariosService.editarUsuario(data);
    res.json(result)
}

async function eliminarUsuario(req, res) {
    const { id } = req.params;
    const result = await usuariosService.eliminarUsuario(id);
    res.json(result)
}

async function obtenerRoles(req, res) {
    const result = await usuariosService.obtenerRoles();
    res.json(result)
}

module.exports = {
    obtenerUsuarios,
    obtenerUsuario,
    crearUsuario,
    editarUsuario,
    eliminarUsuario,
    obtenerRoles
}