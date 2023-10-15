import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { UsersModule } from "./users/users.module";
import { WorkspacesService } from "./nest/workspaces/workspaces.service";
import { WorkspacesModule } from "./workspaces/workspaces.module";
import { ChannelsModule } from "./channels/channels.module";
import { DmsModule } from "./dms/dms.module";
import { UsersController } from "./users/users.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ChannelChats } from "./entities/ChannelChats";
import { ChannelMembers } from "./entities/ChannelMembers";
import { Channels } from "./entities/Channels";
import { DMs } from "./entities/DMs";
import { Mentions } from "./entities/Mentions";
import { Users } from "./entities/Users";
import { WorkspaceMembers } from "./entities/WorkspaceMembers";
import { Workspaces } from "./entities/Workspaces";

@Module({
  imports: [
    ConfigModule.forRoot(),
    UsersModule,
    WorkspacesModule,
    ChannelsModule,
    DmsModule,
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "127.0.0.1",
      port: 3306,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [
        ChannelChats,
        ChannelMembers,
        Channels,
        DMs,
        Mentions,
        Users,
        WorkspaceMembers,
        Workspaces,
      ],
      synchronize: true,
      logging: true,
      keepConnectionAlive: true,
    }),
  ],
  controllers: [AppController, UsersController],
  providers: [AppService, WorkspacesService],
})
export class AppModule {}
