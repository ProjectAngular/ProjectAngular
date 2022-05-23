import { IsNumber, IsString } from 'class-validator';

export class CourseDto {
  @IsNumber()
  courseID: number;

  @IsString()
  courseCode: string;

  @IsString()
  courseTitle: string;

  @IsNumber()
  courseCredit: number;

  @IsString()
  courseTimestart: string;

  @IsString()
  courseTimeend: string;

  @IsString()
  courseDate: string;

  @IsString()
  courseLocation: string;

  @IsString()
  courseOnline: string;

  @IsString()
  courseSection: string;
}
