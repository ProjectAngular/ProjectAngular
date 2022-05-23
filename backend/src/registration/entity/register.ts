import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Register {
  @PrimaryColumn()
  courseCode: string;

  @PrimaryColumn()
  studentID: string;
}
