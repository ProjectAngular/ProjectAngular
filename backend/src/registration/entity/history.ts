import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class History {
  @PrimaryColumn()
  courseCode: string;

  @PrimaryColumn()
  studentID: string;

  @Column()
  term: number;

  @Column()
  year: number;
}
