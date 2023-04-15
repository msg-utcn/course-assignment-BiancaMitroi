import { ApiProperty } from '@nestjs/swagger';

export class RegisterUserDto {
  @ApiProperty({
    description: 'The name of user',
    example: 'John Doe',
    required: true,
  })
  name: string;

  @ApiProperty({
    description: 'The mail address of the user',
    example: 'john.doe@gmail.com',
    required: true,
  })
  email: string;

  @ApiProperty({
    description: 'The password of the user',
    example: 'doejohn10',
    required: true,
  })
  password: string;
}
