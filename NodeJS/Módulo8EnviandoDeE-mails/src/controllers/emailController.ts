import { Request, Response } from "express";
import { Auth } from "../model/authModel";
import nodemailer from 'nodemailer'


export const contato = async (req: Request, res: Response)=>{
    // Passo 1: Configurar o transporter
    /*
    var transport = nodemailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "fb25343a265ef0",
          pass: "fcf7376d4c47d5"
        }
      });
    */

      var transport = nodemailer.createTransport({
        host: "smtp.elasticemail.com",
        port: 2525,
        auth: {
          user: "mateusgodoi_7166@outlook.com",
          pass: "F745DCE415D7C91C73A37F8D404810524CEF"
        }
      });


    // Passo 2: Configurar a mensagem
    let message = {
        from:'mateusgodoi_7166@outlook.com',
        to: 'mateusgodoi007@gmail.com',
        //replyTo: req.body.from,
        subject: req.body.subject,
        html: req.body.email,
        text: req.body.email
    }
    // Passo 3: enviar a mensagem

    let info = await transport.sendMail(message)

    console.log("INFO",info);

    res.json({success: true})
    
}