"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DB_1 = require("../../DB");
const error_1 = require("../../utils/error");
const factory_1 = require("./factory");
const utils_1 = require("../../utils");
class PostService {
    constructor() {
        this.postRepository = new DB_1.PostRepository();
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
        this.reactToPost = async (req, res, next) => {
            //get data from request
            const { id } = req.params;
            const { reaction } = req.body;
            const userId = req.user._id;
            //check post exists
            const postExists = await this.postRepository.exsit({ _id: id });
            if (!postExists) {
                throw new error_1.NotFoundException("Post not found");
            }
            //check if user already reacted to post
            const userReactedIndex = postExists.reaction.findIndex((reaction) => {
                return reaction.userId.toString() == userId.toString();
            });
            //if user has not reacted to post
            if (userReactedIndex == -1) {
                //repository>> react to post
                await this.postRepository.update({ _id: id }, { $push: { reaction: {
                            reaction: [undefined, null, ""].includes(reaction)
                                ? utils_1.REACTION.LIKE
                                : reaction,
                            userId
                        } } });
            }
            else if ([undefined, null, ""].includes(reaction)) {
                await this.postRepository.update({ _id: id, 'reaction.userId': userId }, { $pull: { reaction: postExists.reaction[userReactedIndex] } });
            }
            //if user has reacted to post
            else {
                await this.postRepository.update({ _id: id, 'reaction.userId': userId }, { "reaction.$.reaction": reaction });
            }
            //send response
            return res.sendStatus(204);
        };
    }
}
exports.default = new PostService();
