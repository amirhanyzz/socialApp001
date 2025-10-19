import { ObjectId } from "mongoose"
import { IReaction,IAttachment } from "../../../utils/common/interface"
class Post{
   public userId!:ObjectId   
   public content!:string
   public reaction !:IReaction[]
   public attachments?:IAttachment[]
}

export default Post
