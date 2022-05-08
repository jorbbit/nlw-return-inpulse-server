import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "9cc327556fb6a1",
    pass: "36a82d8f9d3f5b"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: 'Equipe Feedget <oi@feedget.com>',
      to: 'Jonatas A. Oliveira <jonatas@orbbit.com>',
      subject: 'Novo Feedback',
      html: body,
    });
  };
}