import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

export interface ITimeEntry {
  id: number;

  applicationName: string;

  url: string;

  startTime: Date;

  endTime: Date;

  /**
   * Duration in Seconds
   */
  duration: number;
}

@Entity()
export class TimeEntry implements ITimeEntry {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  applicationName: string;

  @Column()
  url: string;

  @Column()
  startTime: Date;

  @Column()
  endTime: Date;

  @Column()
  duration: number;

}
