import { RegisterUserDto } from '../dtos/register-user.dto';
import { UserDto } from '../dtos/user.dto';
import { UserModel } from '../model/user.model';
import bcrypt from 'bcrypt';
import { UserRole } from '../model/user-role';
import { Logger } from '@nestjs/common';

export class UserMapper {
  static mapToDto(model: UserModel): UserDto {
    return new UserDto({
      id: model.id,
      name: model.name,
      email: model.email,
      roles: model.roles,
    });
  }

  static mapRegisterToModel(dto: RegisterUserDto): UserModel {
    return new UserModel({
      id: undefined,
      name: dto.name,
      email: dto.email,
      password: bcrypt.hash(dto.password, 12, (err, hash) => {
        if (err) {
          Logger.error(err);
          return;
        }
      }),
      roles: [UserRole.USER],
    });
  }
}
