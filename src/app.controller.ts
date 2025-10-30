import { Controller } from '@nestjs/common';
import { AppService } from './app.service';
import { EventPattern, Payload } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @EventPattern('email')
  handleEmail(@Payload() data): string {
    console.log(`Received a new message ${data}`);

    return this.appService.getHello();
  }

  @EventPattern('kuy')
  handleEmailKuy(@Payload() data): string {
    console.log(`kuy Received a new message ${data}`);
    console.log(data);

    return this.appService.getHello();
  }
}
