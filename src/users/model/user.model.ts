import {
  AllowNull,
  Column,
  Default,
  Model,
  PrimaryKey,
  Table,
  Unique,
} from 'sequelize-typescript';

import { UUIDV4 } from 'sequelize';
import { UserRole } from '../enums/user-role.enum';

@Table({ timestamps: true })
export class User extends Model {
  @PrimaryKey
  @Default(UUIDV4)
  @Column
  id: string;

  @AllowNull(false)
  @Column
  first_name: string;

  @AllowNull(false)
  @Column
  last_name: string;

  @Unique
  @AllowNull(false)
  @Column
  email: string;

  @Column
  secondary_email: string;

  @AllowNull(false)
  @Column
  phone: string;

  @Column
  avatar_url: string;

  @Column
  avatar_key: string;

  @Column
  password: string;

  @Default(false)
  @Column
  is_active: boolean;

  @AllowNull(false)
  @Column({ validate: { isIn: [['admin', 'user', 'super_admin']] } })
  role: string;
}
