

import { Schema } from "mongoose";
import { IReaction } from "../../../utils";
import { REACTION } from "../../../utils";


 export const reactionSchema = new Schema<IReaction>({
    reaction:{
        type:Number,
        enum:REACTION,
        default:REACTION.LIKE,
        validate:{
            validator:(v)=> v != null 
            ,
            message:"Reaction is required"
        }
    }, 
    userId:{
        type:Schema.Types.ObjectId,
        ref:"User",
        required:true
    }
},{timestamps:true})
