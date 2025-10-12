"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractRepository = void 0;
class AbstractRepository {
    constructor(model) {
        this.model = model;
    }
    // create
    async create(item) {
        const doc = new this.model(item);
        return await doc.save();
    }
    // exsit
    async exsit(filter, projection, option) {
        return await this.model.findOne(filter, projection, option);
    }
    // getOne
    async getOne(filter, projection, option) {
        return await this.model.findOne(filter, projection, option);
    }
    // update
    async update(filter, update, // <T> is the type of the document  //partial is used to update only the fields that are provided
    options) {
        return await this.model.updateOne(filter, update, options);
    }
    // delete
    async delete(filter) {
        return await this.model.deleteOne(filter);
    }
    // find
    async find(filter, projection, option) {
        return await this.model.find(filter, projection, option);
    }
    // findOne
    async findOne(filter, projection, option) {
        return await this.model.findOne(filter, projection, option);
    }
}
exports.AbstractRepository = AbstractRepository;
