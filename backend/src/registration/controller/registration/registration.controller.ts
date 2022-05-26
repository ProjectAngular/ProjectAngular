import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { RegistrationService } from 'src/registration/services/registration/registration.service';
import { CourseDto } from 'src/registration/dto/course.dto/course-dto';
import { TeacherDto } from 'src/registration/dto/teacher.dto/teacher-dto';
import { CourseownerDto } from 'src/registration/dto/courseowner.dto/courseowner-dto';
import { RegisterDto } from 'src/registration/dto/register.dto/register-dto';
import { StudentDto } from 'src/registration/dto/student.dto/student-dto';

@Controller('registration')
export class RegistrationController {
  constructor(private registrationService: RegistrationService) {}

  //------------------------Course--------------------------------
  @Post('Course/Add/:teacherID')
  async CreateCourse(
    @Param('teacherID') teacherID: string,
    @Body() newCourse: CourseDto,
  ): Promise<CourseDto> {
    const teacher = await this.registrationService.SearchTeacher(teacherID);
    if (teacher != undefined) {
      const newCourseowner: CourseownerDto = {
        courseCode: newCourse.courseCode,
        teacherID: teacher.teacherID,
        courseSection: newCourse.courseSection,
      };
      this.registrationService.CreateCourseowner(newCourseowner);
      this.registrationService.CreateCourse(newCourse);
    }
    return null;
  }

  @Get('Course/All')
  GetCourse(): Promise<CourseDto[]> {
    return this.registrationService.GetCourse();
  }

  @Get('Course/:courseCode')
  async GetCoursOnee(
    @Param('courseCode') courseCode: string,
  ): Promise<CourseDto> {
    return await this.registrationService.SearchCourse2(courseCode);
  }

  @Put('Course/Edit/:courseCode/:courseSection')
  async UpdateCourse(
    @Param('courseCode') courseCode: string,
    @Param('courseSection') courseSection: string,
    @Body() newCourse: CourseDto,
  ): Promise<CourseDto> {
    const course = await this.registrationService.SearchCourse(
      courseCode,
      courseSection,
    );
    course.courseCode = newCourse.courseCode;
    course.courseTitle = newCourse.courseTitle;
    course.courseCredit = newCourse.courseCredit;
    course.courseTimestart = newCourse.courseTimestart;
    course.courseTimeend = newCourse.courseTimeend;
    course.courseDate = newCourse.courseDate;
    course.courseLocation = newCourse.courseLocation;
    course.courseOnline = newCourse.courseOnline;
    course.courseSection = newCourse.courseSection;
    return await this.registrationService.CreateCourse(course);
  }

  @Delete('Course/Delete/:courseID')
  async DeleteCourse(@Param('courseID') courseID: number): Promise<any> {
    await this.registrationService.RemoveCourse(courseID);
    return { sucesss: true };
  }

  //------------------------Course--------------------------------

  //------------------------Teacher--------------------------------

  @Post('Teacher/Add')
  CreateTeacher(@Body() newTeacher: TeacherDto): Promise<TeacherDto> {
    return this.registrationService.CreateTeacher(newTeacher);
  }

  @Get('Teacher/All')
  GetTeacher(): Promise<TeacherDto[]> {
    return this.registrationService.GetTeacher();
  }
  //------------------------Teacher--------------------------------

  //------------------------Register------------------------------

  @Post('Register/Add')
  async CreateRegister(@Body() newRegister: RegisterDto): Promise<RegisterDto> {
    const course = await this.registrationService.SearchCourse(
      newRegister.courseCode,
      newRegister.courseSection,
    );
    const student = await this.registrationService.SearchStudent(
      newRegister.studentID,
    );
    newRegister.courseCode = course.courseCode;
    newRegister.studentID = student.studentID;
    return this.registrationService.CreateRegister(newRegister);
  }

  @Get('Register/All')
  GetRegister(): Promise<RegisterDto[]> {
    return this.registrationService.GetRegister();
  }
  //------------------------Register------------------------------

  //------------------------Courseowner------------------------------
  @Get('Courseowner/Teachowner/:TeacherID')
  async ShowTeachowner(
    @Param('TeacherID') TeacherID: string,
  ): Promise<CourseDto[]> {
    const course = await this.registrationService.ShowTeachowner(TeacherID);
    const courseTeach: CourseDto[] = [];
    for (let i = 0; i < course.length; i++) {
      const teach = await this.registrationService.GetTeachCourse(
        course[i].courseCode,
        course[i].courseSection,
      );
      courseTeach.push(teach);
    }
    return courseTeach;
  }
  //------------------------Courseowner------------------------------

  @Get('Course/Detail/:teacherID/:courseCode') //********************** */
  getStudentListOrderByCourse(
    @Param('teacherID') teacherID: string,
    @Param('courseCode') courseCode: string,
  ): Promise<StudentDto[]> {
    return this.registrationService.StudentListOrderByCourse(
      teacherID,
      courseCode,
    );
  }
}
