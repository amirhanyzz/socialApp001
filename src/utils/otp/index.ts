export const generateOtp = ():string => {
    return Math.floor(1000 + Math.random() * 9000)as unknown  as string
}

    
export const generateExpiryAt = ( time:number)=> {
    return Date.now() + time
}