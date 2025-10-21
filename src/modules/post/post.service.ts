import { NextFunction, Request, Response } from "express";
import { PostRepository } from "../../DB";
import { NotFoundException } from "../../utils/error";
import { PostFactoryService } from "./factory";
import { CreatePostDto } from "./post.dto";
import { REACTION } from "../../utils";






class PostService{  





    private postRepository = new PostRepository()   
    private postFactoryService = new PostFactoryService()
        constructor(){}


   public createPost =async(req:Request,res:Response,next:NextFunction)=>{



        //get data from request

        const createPostDto:CreatePostDto = req.body
        //factory>> create post 
        const post =await this.postFactoryService.createPost(createPostDto,req.user)
        //repository>> save post
         await this.postRepository.create(post)
        //send response
         res.status(201).json(
            {message:"Post created successfully",success:true,data:{id:post.userId}})
















    }

public reactToPost =async(req:Request,res:Response,next:NextFunction)=>{
 
 //get data from request

const {id} = req.params
const {reaction} = req.body
const userId = req.user._id
//check post exists
const postExists = await this.postRepository.exsit({ _id: id })
if (!postExists) {
    throw new NotFoundException("Post not found")
}

//check if user already reacted to post
const userReactedIndex = postExists.reaction.findIndex((reaction) => {
   return reaction.userId.toString() == userId.toString()
})

//if user has not reacted to post
if(userReactedIndex == -1){
//repository>> react to post
await this.postRepository.update(
    { _id: id },
   { $push: { reaction: {
    reaction:[undefined,null,""].includes(reaction)
       ? REACTION.LIKE
       :reaction,
     userId 


    }}})

}
else if([undefined,null,""].includes(reaction)){
await this.postRepository.update(
    { _id: id ,'reaction.userId':userId},
{   $pull:{reaction:postExists.reaction[userReactedIndex]} })
}

//if user has reacted to post
else{
    await this.postRepository.update(
        { _id: id ,'reaction.userId':userId},
    {  "reaction.$.reaction":reaction })
}




//send response
return res.sendStatus(204)


}



}
export default new PostService()