const mysql = require("mysql2/promise");

const conexion = mysql.createPool({
    host: process.env.HOST_DB,
    user: process.env.USER_DB,
    password: process.env.PASSWORD_DB,
    database: process.env.NAME_DB,
    waitForConnections: true,
    connectionLimit: 10
});

module.exports = conexion;