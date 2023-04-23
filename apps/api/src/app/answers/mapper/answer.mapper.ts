import { CreateAnswerDto } from '../dto/create-answer.dto';
import { AnswerModel } from '../model/answer.model';
import { UpdateAnswerDto } from '../dto/update-answer.dto';
import { AnswerDto } from '../dto/answer.dto';

export class AnswerMapper {
  static mapCreateAnswerToModel(dto: CreateAnswerDto): AnswerModel {
    return new AnswerModel({
      id: undefined,
      rating: 0,
      content: dto.content,
      creationDate: new Date(),
    });
  }

  static mapUpdateAnswerToModel(
    dto: UpdateAnswerDto,
    oldModel: AnswerModel
  ): AnswerModel {
    return new AnswerModel({
      ...oldModel,
      content: dto.content,
    });
  }

  static mapToDto(model: AnswerModel): AnswerDto {
    return new AnswerDto({
      id: model.id,
      content: model.content,
      rating: model.rating,
      creationDate: model.creationDate,
    });
  }
}
