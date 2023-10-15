import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { UsersModule } from "./users/users.module";
import { WorkspacesModule } from "./workspaces/workspaces.module";
import { ChannelsModule } from "./channels/channels.module";
import { DmsModule } from "./dms/dms.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ChannelChats } from "./entities/ChannelChats";
import { ChannelMembers } from "./entities/ChannelMembers";
import { Channels } from "./entities/Channels";
import { DMs } from "./entities/DMs";
import { Mentions } from "./entities/Mentions";
import { Users } from "./entities/Users";
import { WorkspaceMembers } from "./entities/WorkspaceMembers";
import { Workspaces } from "./entities/Workspaces";
import { AuthModule } from "./auth/auth.module";

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
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
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
