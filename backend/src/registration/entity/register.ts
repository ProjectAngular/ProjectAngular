import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Register {
  @PrimaryColumn()
  courseCode: string;

  @Column()
  courseSection: string;

  @PrimaryColumn()
  studentID: string;

  @Column()
  year: string;
}
