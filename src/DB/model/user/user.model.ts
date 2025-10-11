import { userSchema } from "./user.schema";
import {model} from "mongoose";
import { IUser } from "../../../utils/common/interface";

const userModel = model<IUser>("User", userSchema);

export default userModel;