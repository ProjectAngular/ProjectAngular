import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Register {
  
  @PrimaryGeneratedColumn()
  r_id: number;

  @Column()
  courseCode: string;

  @Column()
  courseSection: string;

  @Column()
  studentID: string;

  @Column()
  year: string;
}
