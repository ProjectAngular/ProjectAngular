import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Teacher {
  @PrimaryColumn()
  teacherID: string;

  @Column()
  teacherName: string;

  @Column()
  teacherIdennum: string;
}
