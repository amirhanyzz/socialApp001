import{NextFunction, Request,Response, type Express }from "express";

import { connectDB } from "./DB";
import { AppError } from "./utils/error";
import {userRouter,authRouter} from "./modules"
export function bootstrap(app: Express , express: any) {
app.use(express.json())

app.use("/auth", authRouter);


app.use("/user", userRouter);






app.use("/{*dummy}", (req:Request, res:Response,next:NextFunction) => {
    res.status(404).json({ message: "Not Found",success:false });
    
});


app.use((error:AppError,req:Request,res:Response,next:NextFunction)=>{

return res.status(error.statusCode || 500).json({
    message:error.message,
    success:false,
    data:error.errorDetails 
})

})







connectDB()
}