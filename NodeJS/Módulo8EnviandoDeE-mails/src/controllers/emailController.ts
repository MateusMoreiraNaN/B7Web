import { Request, Response } from "express";
import { Auth } from "../model/authModel";
import nodemailer from 'nodemailer'


export const contato = ()=>{
    // Passo 1: Configurar o transporter
    let transport = nodemailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "13f0f1e790dff2",
          pass: "********fdb7"
        }
      });


    // Passo 2: Configurar a mensagem
    // Passo 3: enviar a mensagem
}