import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class Auth extends Model {
  @Column
  userId: string;

  @Column
  email: string;

  @Column
  successful: boolean;
}
