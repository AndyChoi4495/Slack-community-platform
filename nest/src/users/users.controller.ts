import {
  Controller,
  Get,
  Post,
  Req,
  Res,
  Body,
  UseInterceptors,
} from "@nestjs/common";
import { User } from "../common/decorators/user.decorator";
//import { Token } from "../common/decorators/token.decorator";
import { JoinRequestDto } from "./dto/join.request.dto";
import { UsersService } from "./users.service";
import { ApiOperation } from "@nestjs/swagger";
import { UndefinedToNullInterceptor } from "src/interceptors/undefinedToNull.interceptors";

@UseInterceptors(UndefinedToNullInterceptor)
@Controller("users") //address
export class UsersController {
  constructor(private usersService: UsersService) {}

  @ApiOperation({ summary: "My information" })
  @Get()
  getUsers(@User() user) {
    return user;
  }

  @ApiOperation({ summary: "Register" })
  @Post()
  postUsers(@Body() body: JoinRequestDto) {
    this.usersService.postUsers(body.email, body.nickname, body.password);
  }

  @ApiOperation({ summary: "Login" })
  @Post("login")
  logIn(@User() user) {
    return user;
  }

  @ApiOperation({ summary: "Logout" })
  @Post("logout")
  logOut(@Req() req, @Res() res) {
    req.logOut();
    res.clearCookie("connect.sid", { httpOnly: true });
    res.send("ok");
  }
}
