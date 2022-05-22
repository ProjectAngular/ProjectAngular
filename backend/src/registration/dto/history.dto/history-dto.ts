import { IsNumber, IsString } from 'class-validator';

export class HistoryDto {
  @IsNumber()
  courseID: number;

  @IsString()
  studentID: string;

  @IsNumber()
  term: number;

  @IsNumber()
  year: number;
}
