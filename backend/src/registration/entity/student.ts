import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Student {
  @PrimaryColumn()
  studentID: number;

  @Column()
  studentName: string;

  @Column()
  studentYear: number;

  @Column()
  studentIdennum: string;

  @Column()
  studentStatus: string;
}
