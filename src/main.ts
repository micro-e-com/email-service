import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { MailService } from '@sendgrid/mail';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.RMQ,
      options: {
        urls: ['amqp://user:password@localhost:5672'],
        queue: 'email-queue',
      },
    },
  );
  await app.listen();

  // k.send(msg)
  //   .then(() => {
  //     console.log('Email sent');
  //   })
  //   .catch((error) => {
  //     console.error(error.response.body);
  //   });
}
bootstrap();
