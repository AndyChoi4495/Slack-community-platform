import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class JoinRequestDto {
  @IsEmail()
  @ApiProperty({
    example: "yunseok@gmail.com",
    description: "email",
  })
  public email: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: "user1",
    description: "nickname",
  })
  public nickname: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: "YunseokChoi",
    description: "password",
  })
  public password: string;
}
