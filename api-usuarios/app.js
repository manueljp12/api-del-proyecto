const express = require("express");
const cors = require("cors");
require("dotenv").config();

const usuariosRoutes = require("./routes/usuariosRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/usuario", usuariosRoutes)

const port = process.env.PORT || 3000

app.listen(port,()=> {
    console.log(`servidor corriendo en el puerto ${port}`)
})