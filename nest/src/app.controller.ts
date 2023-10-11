import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('user') // GET /user
  getUser(): string {
    return this.appService.getUser();
  }
}
