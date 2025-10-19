import { postSchema } from "./post.schema";
import { model } from "mongoose";
export const PostModel = model("Post",postSchema)

