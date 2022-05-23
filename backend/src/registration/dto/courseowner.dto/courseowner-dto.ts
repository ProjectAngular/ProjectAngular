import { IsNumber, IsString } from 'class-validator';

export class CourseownerDto {
  @IsString()
  courseCode: string;

  @IsString()
  teacherID: string;

  @IsString()
  courseSection: string;
}
