import { Controller, Get, Param, Post, Query, Body } from "@nestjs/common";
import { ApiQuery, ApiParam } from "@nestjs/swagger";

@Controller("api/workspaces/:url/dms")
export class DmsController {
  @ApiParam({
    name: "url",
    required: true,
    description: "workspace url",
  })
  @ApiParam({
    name: "id",
    required: true,
    description: "user id",
  })
  @ApiQuery({
    name: "page",
    required: true,
    description: "upload page",
  })
  @ApiQuery({
    name: "perPage",
    required: true,
    description: "Number of pages",
  })
  @Get(":id/chats")
  getChat(@Query() query, @Param() param) {
    console.log(query.perPage, query.page);
    console.log(param.id, param.url);
  }

  @Post(":id/chats")
  postChat(@Body() body) {}
}
