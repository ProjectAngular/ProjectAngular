import { IsNumber, IsString } from 'class-validator';

export class StudentDto {
  @IsString()
  studentID: string;

  @IsString()
  studentName: string;

  @IsNumber()
  studentYear: number;

  @IsString()
  studentIdennum: string;

  @IsString()
  studentStatus: string;
}
