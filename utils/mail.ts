import nodemailer from "nodemailer"
import Mail from "nodemailer/lib/mailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";

const transporter= nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '587'),
    service: process.env.SMTP_SERVICE,
    auth:{
        user: process.env.SMTP_MAIL,
        pass: process.env.SMTP_PASSWORD,
    },
} as SMTPTransport.Options);

type SendEmailDto = {
    sender : Mail.Address , 
    receipients : Mail.Address[],
    subject : string , 
    message : string 
}

export const sendEmail = async (dto : SendEmailDto) => {
    const {sender , receipients , subject , message} = dto;

    return await transporter.sendMail({
        from : sender , 
        to : receipients , 
        subject  , 
        html : message , 
        text : message
    })
}