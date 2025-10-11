import { AbstractRepository } from "../../AbstractRepository";
import { IUser } from "../../../utils/common/interface";
import userModel from "./user.model";
import { FilterQuery } from "mongoose";

export class UserRepository extends AbstractRepository<IUser> {
constructor(){
    super(userModel)
}

async getAllUsers(){
    return await this.model.find()
}


async getSpecificUser(filter:FilterQuery<IUser>){
    return await this.model.findOne(filter)
}

}
