import { ApiProperty } from "@nestjs/swagger";

export class JoinRequestDto {
  @ApiProperty({
    example: "yunseok@gmail.com",
    description: "Email",
    required: true,
  })
  public email: string;
  @ApiProperty({
    example: "user1",
    description: "Nickname",
    required: true,
  })
  public nickname: string;
  @ApiProperty({
    example: "1234",
    description: "Password",
    required: true,
  })
  public password: string;
}
