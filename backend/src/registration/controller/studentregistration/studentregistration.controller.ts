import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
} from '@nestjs/common';
import { CourseDto } from 'src/registration/dto/course.dto/course-dto';
import { HistoryDto } from 'src/registration/dto/history.dto/history-dto';
import { RegisterDto } from 'src/registration/dto/register.dto/register-dto';
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
    if(course.courseCode && course.courseSection != undefined){
      const newHistory: HistoryDto = {
        courseCode: newRegister.courseCode,
        studentID: newRegister.studentID,
        status: 'เพิ่ม',
        year: newRegister.year,
      };
      this.registrationService.CreateHistory(newHistory);
    }
    return this.registrationService.CreateRegister(newRegister);
    }

    @Get('Register/All')
    GetRegister(): Promise<RegisterDto[]> {
        return this.registrationService.GetRegister();
    }
}
