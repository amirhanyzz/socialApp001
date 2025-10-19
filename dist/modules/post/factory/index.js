"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostFactoryService = void 0;
const entity_1 = __importDefault(require("../entity"));
class PostFactoryService {
    async createPost(createPostDto, user) {
        const newPost = new entity_1.default();
        newPost.content = createPostDto.content;
        newPost.userId = user._id;
        newPost.reaction = [];
        newPost.attachments = []; //todo
        return newPost;
    }
    async updatePost() {
    }
}
exports.PostFactoryService = PostFactoryService;
