import { IsNumber, IsString } from 'class-validator';

export class RegisterDto {
  @IsNumber()
  courseCode: string;

  @IsString()
  studentID: string;
}
