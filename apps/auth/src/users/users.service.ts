import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcryptjs';
import { CreateUserDto } from './dto/create-user.dto';
import { GetUserDto } from './dto/get-user.dto';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  private async validateUserUnique(email: string) {
    try {
      const userFound = await this.usersRepository.findOne({ email });

      if (userFound) {
        throw new UnauthorizedException('email already exists');
      }
      return true;
    } catch (error) {
      return true;
    }
  }

  async createUser(createUserDto: CreateUserDto) {
    await this.validateUserUnique(createUserDto.email);

    const salt = await bcrypt.genSalt();

    return this.usersRepository.create({
      ...createUserDto,
      password: await bcrypt.hash(createUserDto.password, salt),
    });
  }

  findOne(getUserDto: GetUserDto) {
    return this.usersRepository.findOne(getUserDto);
  }

  async verifyUser(email: string, password: string) {
    try {
      const user = await this.usersRepository.findOne({ email });

      const isPasswordValid = await bcrypt.compare(password, user.password);

      if (!isPasswordValid) {
        throw new UnauthorizedException('credentials are not valids');
      }

      return user;
    } catch (error) {
      throw new UnauthorizedException('credentials are not valids');
    }
  }
}
