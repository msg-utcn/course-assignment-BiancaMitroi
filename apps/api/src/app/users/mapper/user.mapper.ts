import {RegisterUserDto} from "../dtos/register-user.dto";
import {UserDto} from "../dtos/user.dto";
import {UserModel} from "../model/user.model";
import bcrypt from 'bcrypt'

export class UserMapper{

  static mapToDto(model: UserModel): UserDto {
    return new UserDto({
      id: model.id,
      name: model.name,
      email: model.email,
      roles: model.roles
    });
  }

  static mapRegisterToModel(dto: RegisterUserDto): UserModel{
    return new UserModel({
      id: undefined,
      name: dto.name,
      email: dto.email,
      password: bcrypt.hash(dto.password, 12, (err, hash) => {
        if (err) {
          console.error(err)
          return
        }
        console.log(hash)
      }),
      roles: undefined
    });
  }
}
