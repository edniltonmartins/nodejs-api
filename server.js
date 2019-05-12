'use strict'

const app = require("../NoFoodAPI/config/express");
const variables = require('../NoFoodAPI/config/environment/variables')

app.listen(variables.Api.port, ()=>{
    console.info(`Api inicializada com sucesso na porta ${variables.Api.port}`);
});