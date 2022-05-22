import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Register {
  @PrimaryColumn()
  courseID: number;

  @PrimaryColumn()
  studentID: string;
}
