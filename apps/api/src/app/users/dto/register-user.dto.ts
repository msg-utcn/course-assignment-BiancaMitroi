import { ApiProperty } from '@nestjs/swagger';
import {UserRole} from "../models/user-role.model";
import {IsEmail, IsNotEmpty} from "class-validator";

export class RegisterUserDto {
  @IsNotEmpty()
  @ApiProperty({
    description: 'The name of the user',
    example: 'John Smith',
    required: true,
  })
  name: string;

  @IsNotEmpty()
  @ApiProperty({
    description: 'The email of the user',
    example: 'john@email.com',
    required: true,
  })
  email: string;

  @IsEmail()
  @ApiProperty({
    description: 'The password of the user',
    example: 'password',
    required: true,
  })
  password: string;

  @IsNotEmpty()
  @ApiProperty({
    description: 'The password of the user',
    example: UserRole.USER,
    required: true,
  })
  roles: UserRole[];
}
