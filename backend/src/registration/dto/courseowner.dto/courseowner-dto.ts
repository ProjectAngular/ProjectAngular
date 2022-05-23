import { IsNumber, IsString } from 'class-validator';

export class CourseownerDto {
  @IsString()
  courseCode: string;

  @IsString()
  teacherID: string;

  @IsNumber()
  courseSection: string;
}
