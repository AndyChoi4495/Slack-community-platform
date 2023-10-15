import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Users } from "../entities/Users";
import bcrypt from "bcrypt";

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private usersRepository: Repository<Users>,
  ) {}
  getUser() {}
  async join(email: string, nickname: string, password: string) {
    if (!email) {
      return;
    }
    if (!nickname) {
      return;
    }
    if (!password) {
      return;
    }
    const user = await this.usersRepository.findOne({ where: { email } });
    if (user) {
      return;
    }
    const hashedpassword = await bcrypt.hash(password, 12);
    await this.usersRepository.save({
      email,
      nickname,
      password: hashedpassword,
    });
  }
}
