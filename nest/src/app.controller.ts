import { Controller, Get } from "@nestjs/common";
import { AppService } from "./app.service";
import path from "path";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getUser() {
    return "Hello World";
  }
}
