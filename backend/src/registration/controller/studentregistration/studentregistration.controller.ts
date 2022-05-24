import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { count } from 'console';
import { CourseDto } from 'src/registration/dto/course.dto/course-dto';
import { HistoryDto } from 'src/registration/dto/history.dto/history-dto';
import { RegisterDto } from 'src/registration/dto/register.dto/register-dto';
import { StudentDto } from 'src/registration/dto/student.dto/student-dto';
import { Student } from 'src/registration/entity/student';
import { RegistrationService } from 'src/registration/services/registration/registration.service';

@Controller('studentregistration')
export class StudentregistrationController {
  constructor(private registrationService: RegistrationService) {}

  //------------------------Course--------------------------------
  @Get('Course/All')
  GetCourse(): Promise<CourseDto[]> {
    return this.registrationService.GetCourse();
  }

  //------------------------Register------------------------------
  @Post('Register/Add')
  async CreateRegister(@Body() newRegister: RegisterDto): Promise<RegisterDto> {
    const course = await this.registrationService.SearchCourse(
      newRegister.courseCode,
      newRegister.courseSection,
    );
    newRegister.courseCode = course.courseCode;
    newRegister.courseSection = course.courseSection;
    if (course.courseCode && course.courseSection != undefined) {
      const newHistory = new HistoryDto();
      newHistory.courseCode = newRegister.courseCode;
      newHistory.studentID = newRegister.studentID;
      newHistory.status = 'เพิ่ม';
      newHistory.year = newRegister.year;
      // const newHistory: HistoryDto = {
      //   courseCode: newRegister.courseCode,
      //   studentID: newRegister.studentID,
      //   status: 'เพิ่ม',
      //   year: newRegister.year,
      // };
      this.registrationService.CreateHistory(newHistory);
      return this.registrationService.CreateRegister(newRegister);
    }
    return null;
  }
  @Delete('Drop/:StudentID/:courseCode')
  async DropCourse(
    @Param('StudentID') studentID: string,
    @Param('courseCode') courseCode: string,
  ): Promise<void> {
    const dropcouse = await this.registrationService.GetRegisterowner2(
      studentID,
      courseCode,
    );
    const updateHistory = await this.registrationService.GetHistoryOwner(
      studentID,
      courseCode,
    );
    const newHistory = new HistoryDto();
    newHistory.courseCode = updateHistory.courseCode;
    newHistory.studentID = updateHistory.studentID;
    newHistory.status = 'ถอน';
    newHistory.year = updateHistory.year;
    this.registrationService.CreateHistory(newHistory);
    return this.registrationService.RemoveRegister(dropcouse.r_id);
  }
  @Get('Register/All')
  GetRegister(): Promise<RegisterDto[]> {
    return this.registrationService.GetRegister();
  }

  //------------------------Student----------------------------------
  @Get('Studenthistory/:studentID')
  async GetHistoryowner(
    @Param('studentID') studentID: string,
  ): Promise<HistoryDto[]> {
    const historyOwner = await this.registrationService.ShowHistory(studentID);
    const hac: any[] = []; // History and Course
    for (let i = 0; i < historyOwner.length; i++) {
      const courseCredit = await this.registrationService.SearchCourse2(
        historyOwner[i].courseCode,
      );
      hac.push({
        courseCode: historyOwner[i].courseCode,
        studentID: historyOwner[i].studentID,
        status: historyOwner[i].status,
        year: historyOwner[i].year,
        courseCredit: courseCredit.courseCredit,
      });
    }
    return hac;
  }
  @Get('StudyTable/:studentID')
  async GetStudentDate(
    @Param('studentID') studentID: string,
  ): Promise<RegisterDto[]> {
    const registerOwner = await this.registrationService.GetRegisterowner(
      studentID,
    );
    const rac: any[] = []; // Register and Course
    for (let i = 0; i < registerOwner.length; i++) {
      const course = await this.registrationService.SearchCourse(
        registerOwner[i].courseCode,
        registerOwner[i].courseSection,
      );
      rac.push({
        courseCode: registerOwner[i].courseCode,
        studentID: registerOwner[i].studentID,
        courseCredit: course.courseCredit,
        courseTitle: course.courseTitle,
        courseTimeend: course.courseTimeend,
        courseTimestart: course.courseTimestart,
        courseOnline: course.courseOnline,
        courseSection: course.courseSection,
        courseLocation: course.courseLocation,
        courseDate: course.courseDate,
      });
    }
    return rac;
  }

  @Post('student/add')
  addStudent(@Body() newStudent: StudentDto): Promise<StudentDto> {
    return this.registrationService.CreateStudent(newStudent);
  }
  //------------------------Student----------------------------------
}
