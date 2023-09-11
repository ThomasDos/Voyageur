import { Exclude, Expose } from 'class-transformer';
import { IsEmail, IsOptional, IsStrongPassword } from 'class-validator';

export class CreateUserDto {
  @IsOptional()
  @Expose()
  _id: string;

  @IsEmail()
  email: string;

  @IsStrongPassword()
  @Exclude({ toPlainOnly: true })
  password: string;
}
