import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { User as IUser } from '../models/user';

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
