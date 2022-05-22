import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CourseDto } from 'src/registration/dto/course.dto/course-dto';
import { CourseownerDto } from 'src/registration/dto/courseowner.dto/courseowner-dto';
import { RegisterDto } from 'src/registration/dto/register.dto/register-dto';
import { TeacherDto } from 'src/registration/dto/teacher.dto/teacher-dto';
import { Course } from 'src/registration/entity/course';
import { Courseowner } from 'src/registration/entity/courseowner';
import { Register } from 'src/registration/entity/register';
import { Teacher } from 'src/registration/entity/teacher';
import { Repository } from 'typeorm';

@Injectable()
export class RegistrationService {
  constructor(
    @InjectRepository(Course)
    private courseRepository: Repository<Course>,

    @InjectRepository(Courseowner)
    private courseownerRepository: Repository<Courseowner>,

    @InjectRepository(Teacher)
    private teacherRepository: Repository<Teacher>,

    @InjectRepository(Register)
    private registerRepository: Repository<Register>,
  ) {}

  // ---------------------Course------------------------

  CreateCourse(ac: CourseDto): Promise<CourseDto> {
    return this.courseRepository.save(ac);
  }

  GetCourse(): Promise<CourseDto[]> {
    return this.courseRepository.find();
  }

  async RemoveCourse(courseID: number): Promise<void> {
    await this.courseRepository.delete(courseID);
  }

  async SearchCourse(courseID: number): Promise<CourseDto> {
    return await this.courseRepository.findOne({ courseID: courseID });
  }
  // ---------------------Course------------------------

  // ---------------------Teacher------------------------

  CreateTeacher(at: TeacherDto): Promise<TeacherDto> {
    return this.teacherRepository.save(at);
  }

  GetTeacher(): Promise<TeacherDto[]> {
    return this.teacherRepository.find();
  }

  async RemoveTeacher(teacherID: string): Promise<void> {
    await this.teacherRepository.delete(teacherID);
  }

  async SearchTeacher(teacherID: string): Promise<TeacherDto> {
    return await this.teacherRepository.findOne({ teacherID: teacherID });
  }
  // ---------------------Teacher------------------------

  // ---------------------Courseowner------------------------

  CreateCourseowner(aco: CourseownerDto): Promise<CourseownerDto> {
    return this.courseownerRepository.save(aco);
  }

  GetCourseowner(): Promise<CourseownerDto[]> {
    return this.courseownerRepository.find();
  }

  async RemoveCourseowner(courseCode: string): Promise<void> {
    await this.courseownerRepository.delete(courseCode);
  }

  async SearchCourseowner(
    courseCode: string,
    teacherID: string,
  ): Promise<CourseownerDto> {
    return await this.courseownerRepository.findOne({
      courseCode: courseCode,
      teacherID: teacherID,
    });
  }
  // --------------------Courseowner------------------------

  //---------------------Register---------------------------

  CreateRegister(ar: RegisterDto): Promise<RegisterDto> {
    return this.registerRepository.save(ar);
  }

  GetRegister(): Promise<RegisterDto[]> {
    return this.registerRepository.find();
  }

  async RemoveRegister(studentID: string): Promise<void> {
    await this.registerRepository.delete(studentID);
  }

  //---------------------Register---------------------------
}
