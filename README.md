# nodejs-api

nodemon - Faz um auto reload a cada alteração da nossa API

    npm install -g nodemon

    Verificar versão

        nodemon -v
    
    Executar server pelo nodemon

        nodemon server

BodyParser - Faz a conversão automatica do corpo das requisições e respostas para JSON

    npm install body-parser --save

    Adicionando no código vamos fazer o seguinte:

        const bodyParser = require('body-parser');

    Usando e injetando no express:

        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({extended: false}));

    