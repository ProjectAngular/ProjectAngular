import { IsString } from 'class-validator';

export class TeacherDto {
  @IsString()
  teacherID: string;

  @IsString()
  teacherName: string;

  @IsString()
  teacherIdennum: string;
}
