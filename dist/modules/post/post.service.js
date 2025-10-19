"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const post_Repository_1 = require("../../DB/model/posts/post.Repository");
class PostService {
    constructor() {
        this.postRepository = new post_Repository_1.PostRepository();
        this.createPost = (req, res, next) => {
            const createPostDto = req.body;
        };
    }
}
