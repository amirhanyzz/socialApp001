import { PostRepository } from "../../DB/model/posts/post.Repository";
import { NextFunction, Request, Response } from "express";
import { CreatePostDto } from "./post.dto";
import { PostFactoryService } from "./factory";
import {  BadRequestException, NotFoundException } from "../../utils/error";
import console from "console";






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


if(userReactedIndex == -1){
    
    

//repository>> react to post
await this.postRepository.update(
    { _id: id },
{ $push: { reaction: {reaction,userId } } })

}


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