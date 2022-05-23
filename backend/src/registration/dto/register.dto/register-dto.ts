import { IsNumber, IsString } from 'class-validator';

export class RegisterDto {
  
  @IsString()
  courseCode: string;

  @IsString()
  courseSection: string;

  @IsString()
  studentID: string;

  @IsString()
  year: string;
}
