import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { AnswerDto } from './dto/answer.dto';
import { AnswerService } from './answer.service';
import { CreateAnswerDto } from './dto/create-answer.dto';
import { UpdateAnswerDto } from './dto/update-answer.dto';
import { ApiTags } from '@nestjs/swagger';
import { AnswerConfig } from './answer.config';

@ApiTags(AnswerConfig.SWAGGER_FEATURE)
@Controller(AnswerConfig.API_ROUTE)
export class AnswerController {
  constructor(private answerService: AnswerService) {}

  @Get()
  async getAllAnswers(): Promise<AnswerDto[]> {
    return this.answerService.readAll();
  }

  @Post()
  async createAnswer(@Body() dto: CreateAnswerDto): Promise<AnswerDto> {
    return this.answerService.create(dto);
  }

  @Patch(':id')
  async updateAnswer(
    @Param('id') id: string,
    @Body() dto: UpdateAnswerDto
  ): Promise<AnswerDto> {
    return this.answerService.update(id, dto);
  }

  @Delete(':id')
  async deleteAnswer(@Param('id') id: string): Promise<void> {
    return this.answerService.delete(id);
  }
}
