import { PostRepository } from "../../DB/model/posts/post.Repository";
import { NextFunction, Request, Response } from "express";
import { CreatePostDto } from "./post.dto";
import { PostFactoryService } from "./factory";






class PostService{





    private postRepository = new PostRepository()   
    private postFactoryService = new PostFactoryService()
        constructor(){}


    createPost =async(req:Request,res:Response,next:NextFunction)=>{



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







}
export default new PostService()