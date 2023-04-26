import { UserRole } from './user-role';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class UserModel {
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: true })
  email: string;

  @Column({ nullable: true })
  password: string;

  @Column({
    nullable: false,
    enum: UserRole,
    type: 'enum',
    default: UserRole.USER,
  })
  roles: UserRole[];

  constructor(values: Partial<UserModel>) {
    if (values) {
      this.id = values.id;
      this.name = values.name;
      this.email = values.email;
      this.password = values.password;
      this.roles = values.roles;
    }
  }
}
