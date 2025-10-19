"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostRepository = void 0;
const AbstractRepository_1 = require("../../AbstractRepository");
const post_model_1 = require("./post.model");
class PostRepository extends AbstractRepository_1.AbstractRepository {
    constructor() {
        super(post_model_1.PostModel);
    }
}
exports.PostRepository = PostRepository;
