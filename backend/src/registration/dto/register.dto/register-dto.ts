import { IsNumber, IsString } from 'class-validator';

export class RegisterDto {
  
  @IsNumber()
  r_id: number ;

  @IsString()
  courseCode: string;

  @IsString()
  courseSection: string;

  @IsString()
  studentID: string;

  @IsString()
  year: string;
}
