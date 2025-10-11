"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DBService = void 0;
class DBService {
    model;
    constructor(model) {
        this.model = model;
    }
    // create
    async create(item) {
        const doc = new this.model(item);
        return await doc.save();
    }
    // getOne
    getOne() { }
    // update
    update() { }
    // delete
    delete() { }
    // find
    find() { }
    // findOne
    findOne() { }
}
exports.DBService = DBService;
