import { Controller } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';
import { MailService } from '@sendgrid/mail';
import { getWellcomeEmail } from './email-template/wellcome';

@Controller()
export class AppController {
  sgMail = new MailService();

  constructor() {
    this.sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  }

  @EventPattern('send-email-wellcome')
  handleEmail(@Payload() data: { name: string; email: string }) {
    try {
      const msg = {
        to: data.email,
        from: process.env.SENDGRID_SENDER_EMAIL,
        subject: 'Wellcome to our platform',
        html: getWellcomeEmail({ name: data.name }),
      };
      this.sgMail.send(msg);
    } catch (error) {
      console.log(error);
    }
  }
}
