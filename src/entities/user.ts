import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

export interface IUser {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
}

@Entity()
export class User implements IUser {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;
}
