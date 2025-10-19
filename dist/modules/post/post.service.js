"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const post_Repository_1 = require("../../DB/model/posts/post.Repository");
const factory_1 = require("./factory");
class PostService {
    constructor() {
        this.postRepository = new post_Repository_1.PostRepository();
        this.postFactoryService = new factory_1.PostFactoryService();
        this.createPost = async (req, res, next) => {
            //get data from request
            const createPostDto = req.body;
            //factory>> create post 
            const post = await this.postFactoryService.createPost(createPostDto, req.user);
            //repository>> save post
            await this.postRepository.create(post);
            //send response
            res.status(201).json({ message: "Post created successfully", success: true, data: { id: post.userId } });
        };
    }
}
exports.default = new PostService();
