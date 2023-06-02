import { Request, Response } from "express";
import { Auth } from "../model/authModel";
import nodemailer from 'nodemailer'


export const contato = async (req: Request, res: Response)=>{
    // Passo 1: Configurar o transporter
    var transport = nodemailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "fb25343a265ef0",
          pass: "fcf7376d4c47d5"
        }
      });


    // Passo 2: Configurar a mensagem
    let message = {
        from: 'não-responda@b7web.com',
        to: 'fulanoG@hotmail.com',
        replyTo: req.body.from,
        subject: req.body.subject,
        html: req.body.email,
        text: req.body.email
    }
    // Passo 3: enviar a mensagem

    let info = await transport.sendMail(message)

    console.log("INFO",info);

    res.json({success: true})
    
}