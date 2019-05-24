'use strict'

const app = require("./config/express");
const variables = require('./config/environment/variables')

app.listen(variables.Api.port, ()=>{
    console.info(`Api inicializada com sucesso na porta ${variables.Api.port}`);
});