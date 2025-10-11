import express from "express";
import { UserRepository } from "../../DB/model/user/user.repository";

class UserService{
    private readonly userRepository= new UserRepository()
    constructor(){
       
    }




    getProfile=async(req:express.Request,res:express.Response,next:express.NextFunction) => {
    let user= await this.userRepository.getOne({_id:req.params.id})
    if(!user){
        return res.status(404).json({message:"User not found"})
    }
    return res.status(200).json({message:"done",success:true,data:{user}})
}




}


export default new UserService()
