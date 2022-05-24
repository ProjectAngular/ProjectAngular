import { IsNumber, IsString } from 'class-validator';

export class HistoryDto {
  @IsNumber()
  h_id: number;

  @IsString()
  courseCode: string;

  @IsString()
  studentID: string;

  @IsString()
  status: string;

  @IsString()
  year: string;
}
