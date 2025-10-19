import { Schema } from "mongoose";
import { IPost } from "../../../utils/common/interface";
import { REACTION } from "../../../utils/common/enum";
const reactionSchema = new Schema({
    reaction:{
        type:Number,
        enum:REACTION,
        default:REACTION.LIKE
    }, 
    userId:{
        type:Schema.Types.ObjectId,
        ref:"User",
        required:true
    }
},{timestamps:true})
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
    likes:[
       reactionSchema
    ],
    attachments:{
        type:[Schema.Types.ObjectId],
        ref:"Attachment"}
},{timestamps:true})