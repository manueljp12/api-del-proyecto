const mysql = require("mysql2/promise");
require("dotenv").config();

const conexion = mysql.createPool({
    host: process.env.HOST_DB || "localhost",
    user: process.env.USER_DB || "root",
    password: process.env.PASSWORD_DB || "Alanna190920",
    database: process.env.NAME_DB || "inventario",
    waitForConnections: true,
    connectionLimit: 10
});

module.exports = conexion;