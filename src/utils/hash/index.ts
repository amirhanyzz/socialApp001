import bcrypt from "bcryptjs";
export const generateHash = async(password: string) => {
    return await bcrypt.hash(password, 10);
}


export const compareHash = async (password: string, hashPassword: string) => {
    return await bcrypt.compare(password, hashPassword);
}




    

