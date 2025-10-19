import { PostRepository } from "../../DB/model/posts/post.Repository";
import { NextFunction, Request, Response } from "express";
import { CreatePostDto } from "./post.dto";






class PostService{





    private postRepository = new PostRepository()   
    constructor(){}


    createPost =(req:Request,res:Response,next:NextFunction)=>{





        const createPostDto:CreatePostDto = req.body
    }







}