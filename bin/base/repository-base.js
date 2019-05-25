'use strict'

const mongoose = require('mongoose');

class RepositoryBase{
    
    constructor(modelo){
        this._modelo = mongoose.model(modelo);
    }

    async create(data){
        let modelo = new this._modelo(data);
        let resultado = await modelo.save();
        return resultado;
    }

    async update(id, data){
        await this._modelo.findByIdAndUpdate(id, {$set:data});
        let resultado = await this._modelo.findById(id);
        return resultado;
    }

    async getAll(){
        return await this._modelo.find();
    }

    async getById(id){
        return await this._modelo.findById(id);
    }

    async delete(id){
        let deletado = await this._modelo.findByIdAndDelete(id);
    }

}

module.exports = RepositoryBase;