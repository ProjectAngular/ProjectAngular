import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Course {
  @PrimaryGeneratedColumn()
  courseID: number;

  @Column({ nullable: false })
  courseCode: string;

  @Column({ nullable: false })
  courseTitle: string;

  @Column({ nullable: false })
  courseCredit: number;

  @Column({ nullable: false })
  courseTimestart: string;

  @Column({ nullable: false })
  courseTimeend: string;

  @Column({ nullable: false })
  courseDate: string;

  @Column({ nullable: false })
  courseLocation: string;

  @Column({ nullable: false })
  courseOnline: string;

  @Column({ nullable: false })
  courseSection: string;
}
