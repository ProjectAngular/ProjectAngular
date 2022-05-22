import { IsString } from 'class-validator';

export class CourseownerDto {
  @IsString()
  courseCode: string;

  @IsString()
  teacherID: string;
}
