const express = require("express");
const app = express();

// Obtener el enrutador
const enrutadorLibros = require("./auto.route");

// Relacionar el enrutador a la ruta
app.use(`/auto`, enrutadorLibros);

app.listen(3000);