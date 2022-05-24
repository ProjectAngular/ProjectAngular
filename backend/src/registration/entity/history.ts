import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class History {
  @PrimaryGeneratedColumn()
  h_id: number;

  @Column()
  courseCode: string;

  @Column()
  studentID: string;

  @Column()
  status: string;

  @Column()
  year: string;
}
