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

Mongoose - Frameword de mapeamento de documentos do mongo no nodejs

    Instalando

        npm install mongoose --save

    Adicionando ao Código do express customizado

        const mongoose = require('mongoose');

    Criando modelo de exemplo

        Crie um arquivo em uma pasta específica para models

        Segue exemplo:

            'use strict'

            const mongoose = require('mongoose');
            const schema = mongoose.Schema;

            const produtoModel = new schema({
                nome: {type: String, required: true, trim: true, index: true},
                descricao: { type: String, required: true },
                preco: {type: Number, required: true},
                ativo: {type: Boolean, required: true},
                dataCriacao: { type: Date, default: Date.now}},
            {versionKey: false});

            produtoModel.pre('save', next => {
                let agora = new Date();
                if (!this.dataCriacao)
                    this.dataCriacao = agora;
                next();
            });

            module.exports = mongoose.model('Produto',produtoModel);

    

    