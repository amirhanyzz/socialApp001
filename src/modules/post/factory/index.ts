import { CreatePostDto } from "../post.dto";
import Post from "../entity";
import { IUser } from "../../../utils";

export class PostFactoryService {

    async createPost(createPostDto: CreatePostDto, user: IUser) {
        const newPost = new Post()
        newPost.content = createPostDto.content
        newPost.userId = user._id
        newPost.reaction = []
        newPost.attachments = []//todo

        return newPost
    }


    async updatePost() {

    }



}
