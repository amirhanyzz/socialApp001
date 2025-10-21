import { Schema } from "mongoose";
import { IPost } from "../../../utils";
import { reactionSchema } from "../common";
/////////////////////////////////////////////
export const postSchema = new Schema<IPost>({
    userId:{
        type:Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    content:{
        type:String,
        required:function(){
            if(this.attachments.length > 0){
                return false
            }
            return true
        }
    },
    reaction:[
       reactionSchema
    ],
    attachments:{
        type:[Schema.Types.ObjectId],
        ref:"Attachment"}
},{timestamps:true})