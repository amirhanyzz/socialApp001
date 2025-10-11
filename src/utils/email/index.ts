import * as nodemailer from "nodemailer"
import { devConfig } from "../../config/env/dev.config"




export const sendEmail = async( mailOptions: nodemailer.SendMailOptions )=>{
 const transport =  nodemailer.createTransport({
service:"gmail",
auth:{
   user: devConfig.EMAIL_USER,
   pass: devConfig.EMAIL_PASS
}

})

 await transport.sendMail(mailOptions)}































//  msh mstkhdem da bs kon bgarb

// export const sendEmail = async(email:string)=>{
//    nodemailer.createTransport({
//       host: "smtp.gmail.com",
//       port: 465,
//       secure: true, // true for port 465, false for 587
//       auth: {
//         user: devConfig.EMAIL_USER, // Gmail address or SMTP user
//         pass: devConfig.EMAIL_PASS, // App password or SMTP password
//       },
//     }).sendMail({
//       from: devConfig.EMAIL_USER,
//       to: email,
//       subject: "Test Email",
//       text: "This is a test email sent using Node.js and Nodemailer.",
//     });
// }

