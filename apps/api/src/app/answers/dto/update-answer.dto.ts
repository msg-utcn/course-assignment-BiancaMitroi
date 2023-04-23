import { ApiProperty } from '@nestjs/swagger';

export class UpdateAnswerDto {
  @ApiProperty({
    description: 'The content of the answer',
    example: 'something',
    required: true,
  })
  content: string;
}
