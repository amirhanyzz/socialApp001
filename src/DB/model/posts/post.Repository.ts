import { AbstractRepository } from "../../AbstractRepository";
import { IPost } from "../../../utils/common/interface";
import { PostModel } from "./post.model";

export class PostRepository extends AbstractRepository <IPost>{
    constructor(){
        super(PostModel)
    }

}