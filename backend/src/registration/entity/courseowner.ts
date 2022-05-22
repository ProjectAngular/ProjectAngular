import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Courseowner {
  @PrimaryColumn()
  courseCode: string;

  @PrimaryColumn()
  teacherID: string;
}
