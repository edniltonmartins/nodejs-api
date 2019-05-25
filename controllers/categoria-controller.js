'use strict'

const repository = require('../repositories/categoria-repository');
const _repository = new repository();

function categoriaController(){}

categoriaController.prototype.post = async (req, res) =>{ 
    let resultado = await _repository.create(req.body);
    res.status(201).send(resultado);
};

categoriaController.prototype.put = async (req, res) =>{ 
    let resultado = await _repository.update(req.params.id, req.body);
    res.status(202).send(resultado);
};

categoriaController.prototype.get = async (req, res) =>{ 
    let lista = await _repository.getAll();
    res.status(200).send(lista);
};

categoriaController.prototype.getById = async (req, res) =>{ 
    let categoriaEncontrada =  await _repository.getById(req.params.id);
    res.status(200).send(categoriaEncontrada);
};

categoriaController.prototype.delete = async (req, res) =>{ 
    let deletado = await _repository.delete(req.params.id);
    res.status(204).send(deletado);
};

module.exports = categoriaController;