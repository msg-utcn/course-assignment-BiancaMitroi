import {
  BadRequestException,
  Injectable,
  Logger,
  NotFoundException,
} from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import {UserModel} from "./model/user.model";
import {Repository} from "typeorm";
import {RegisterUserDto} from "./dtos/register-user.dto";
import {UserDto} from "./dtos/user.dto";
import {UserMapper} from "./mapper/user.mapper";
import {QuestionMapper} from "../question-management/mappers/question.mapper";

@Injectable()
export class UsersService{

  constructor(@InjectRepository(UserModel)
              private userModelRepository: Repository<UserModel>){}

  async registerUser(dto: RegisterUserDto): Promise<UserDto> {
    const model = UserMapper.mapRegisterToModel(dto);
    try {
      const savedModel = await this.userModelRepository.save(model);
      return UserMapper.mapToDto(savedModel);
    } catch (error) {
      Logger.log(error, 'UserService.register');
      throw new BadRequestException();
    }
  }

  async getUserById(id: string): Promise<UserDto>{
    const foundModel = await this.userModelRepository.findOne({
      where: { id },
    });
    if (!foundModel) {
      throw new NotFoundException();
    }
    return UserMapper.mapToDto(foundModel);
  }

  async getUserByEmail(email: string): Promise<UserDto>{
    const foundModel = await this.userModelRepository.findOne({
      where: { email },
    });
    if (!foundModel) {
      throw new NotFoundException();
    }
    return UserMapper.mapToDto(foundModel);
  }

  async getUsers(): Promise<UserDto[]>{
    const foundModels = await this.userModelRepository.find();
    if (!foundModels) {
      return [];
    }
    return foundModels.map((model) => UserMapper.mapToDto(model));
  }

}
