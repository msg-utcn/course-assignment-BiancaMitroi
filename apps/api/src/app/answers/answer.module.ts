import { Module } from '@nestjs/common';
import { AnswerController } from './answer.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AnswerModel } from './model/answer.model';
import { AnswerService } from './answer.service';

@Module({
  imports: [TypeOrmModule.forFeature([AnswerModel])],
  controllers: [AnswerController],
  providers: [AnswerService],
})
export class AnswerModule {}
