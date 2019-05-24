const mongoose = require('mongoose');
require('../models/categoria-model');

const CategoriaModel = mongoose.model('Categoria');

class categoriaRepository{
    constructor(){ }

    async create(data){
        let categoria = new CategoriaModel(data);
        let resultado = await categoria.save();
        return resultado;
    }

    async update(id, data){
        await CategoriaModel.findByIdAndUpdate(id, {$set:data});
        let resultado = await CategoriaModel.findById(id);
        return resultado;
    }

    async getAll(){
        return await CategoriaModel.find();
    }

    async getById(id){
        return await CategoriaModel.findById(id);
    }

    async delete(id){
        let deletado = await CategoriaModel.findByIdAndDelete(id);
    }
}

module.exports = categoriaRepository;
