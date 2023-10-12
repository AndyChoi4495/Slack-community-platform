import { Controller, Get, Post, Query, Param, Body } from "@nestjs/common";

@Controller("api/workspace/:url/channels")
export class ChannelsController {
  @Get(":name")
  getChannels() {}

  @Post()
  createChannel() {}

  @Get(":name")
  getSpecificChannel() {}

  @Get(":name/chats")
  getChat(@Query() query, @Param() param) {
    console.log(query.perPage, query.page);
    console.log(param.id, param.url);
  }

  @Post(":name/chats")
  postChat(@Body() body) {}

  @Get(":name/members")
  getAllMembers() {}

  @Post(":name/members")
  inviteMembers() {}
}
