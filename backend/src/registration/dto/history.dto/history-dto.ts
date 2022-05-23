import { IsNumber, IsString } from 'class-validator';

export class HistoryDto {
  @IsString()
  courseCode: string;

  @IsString()
  studentID: string;

  @IsString()
  status: string;

  @IsString()
  year: string;
}
