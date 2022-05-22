import { IsNumber, IsString } from 'class-validator';

export class RegisterDto {
  @IsNumber()
  courseID: number;

  @IsString()
  studentID: string;
}
