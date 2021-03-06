const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const variables = require('../bin/environment/variables');

const categoriaRouter = require('../routes/categoria-router');
const produtoRouter = require('../routes/produto-router');
const usuarioRouter = require('../routes/usuario-router');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

mongoose.connect(variables.Database.connection);

//Configurando rotas
app.use("/api/categoria", categoriaRouter);
app.use("/api/produto", produtoRouter);
app.use("/api/usuario", usuarioRouter);

module.exports = app;