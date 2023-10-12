import { Controller, Get, Post, Req, Res, Body } from "@nestjs/common";
import { JoinRequestDto } from "./dto/join.request.dto";
import { UsersService } from "./users.service";
import { ApiOperation } from "@nestjs/swagger";

@Controller("users") //address
export class UsersController {
  constructor(private usersService: UsersService) {}

  @ApiOperation({ summary: "My information" })
  @Get()
  getUsers(@Req() req) {
    return req.user;
  }

  @ApiOperation({ summary: "Register" })
  @Post()
  postUsers(@Body() body: JoinRequestDto) {
    this.usersService.postUsers(body.email, body.nickname, body.password);
  }

  @ApiOperation({ summary: "Login" })
  @Post("login")
  logIn(@Req() req) {
    return req.user;
  }

  @ApiOperation({ summary: "Logout" })
  @Post("logout")
  logOut(@Req() req, @Res() res) {
    req.logOut();
    res.clearCookie("connect.sid", { httpOnly: true });
    res.send("ok");
  }
}
