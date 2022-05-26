import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CourseDto } from 'src/registration/dto/course.dto/course-dto';
import { CourseownerDto } from 'src/registration/dto/courseowner.dto/courseowner-dto';
import { HistoryDto } from 'src/registration/dto/history.dto/history-dto';
import { RegisterDto } from 'src/registration/dto/register.dto/register-dto';
import { StudentDto } from 'src/registration/dto/student.dto/student-dto';
import { TeacherDto } from 'src/registration/dto/teacher.dto/teacher-dto';
import { Course } from 'src/registration/entity/course';
import { Courseowner } from 'src/registration/entity/courseowner';
import { Register } from 'src/registration/entity/register';
import { Student } from 'src/registration/entity/student';
import { Teacher } from 'src/registration/entity/teacher';
import { History } from 'src/registration/entity/history';
import { Repository } from 'typeorm';
import { async } from 'rxjs';

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

    @InjectRepository(Student)
    private studentRepository: Repository<Student>,

    @InjectRepository(History)
    private historyRepository: Repository<History>,
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

  async SearchCourse(
    courseCode: string,
    courseSection: string,
  ): Promise<CourseDto> {
    return await this.courseRepository.findOne({
      courseCode: courseCode,
      courseSection: courseSection,
    });
  }
  async SearchCourse2(courseCode: string): Promise<CourseDto> {
    return await this.courseRepository.findOne({ courseCode: courseCode });
  }

  GetTeachCourse(courseCode: string, num: string): Promise<CourseDto> {
    return this.courseRepository.findOne({
      courseCode: courseCode,
      courseSection: num,
    });
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

  async ShowTeachowner(teacherID: string): Promise<CourseownerDto[]> {
    return await this.courseownerRepository.find({ teacherID: teacherID });
  }

  async SearchCourseowner(
    courseCode: string,
    teacherID: string,
    courseSection: string,
  ): Promise<CourseownerDto> {
    return await this.courseownerRepository.findOne({
      courseCode: courseCode,
      teacherID: teacherID,
      courseSection: courseSection,
    });
  }
  async SearchCourseowner2(
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

  GetRegister2(
    courseCode: string,
    courseSection: string,
  ): Promise<RegisterDto[]> {
    return this.registerRepository.find({
      courseCode: courseCode,
      courseSection: courseSection,
    });
  }
  GetRegisterowner(studentID: string): Promise<RegisterDto[]> {
    return this.registerRepository.find({ studentID: studentID });
  }

  GetRegisterowner2(
    studentID: string,
    courseCode: string,
  ): Promise<RegisterDto> {
    return this.registerRepository.findOne({
      studentID: studentID,
      courseCode: courseCode,
    });
  }

  async RemoveRegister(r_id: number): Promise<void> {
    await this.registerRepository.delete(r_id);
  }

  //---------------------Register---------------------------
  //---------------------student----------------------------

  CreateStudent(as: StudentDto): Promise<StudentDto> {
    return this.studentRepository.save(as);
  }

  GetStudent(): Promise<StudentDto[]> {
    return this.studentRepository.find();
  }

  async SearchStudent(studentID: string): Promise<StudentDto> {
    return await this.studentRepository.findOne({ studentID: studentID });
  }

  ShowHistory(studentID: string): Promise<HistoryDto[]> {
    return this.historyRepository.find({ studentID: studentID });
  }

  StudentListOrderByCourse(studentID: string): Promise<StudentDto> {
    return this.studentRepository.findOne({
      studentID: studentID,
    });
  }

  //---------------------student----------------------------

  //---------------------history----------------------------
  CreateHistory(ar: HistoryDto): Promise<History> {
    return this.historyRepository.save(ar);
  }

  GetHistory(): Promise<HistoryDto[]> {
    return this.historyRepository.find();
  }

  GetHistoryOwner(studentID: string, courseCode: string): Promise<HistoryDto> {
    return this.historyRepository.findOne({
      studentID: studentID,
      courseCode: courseCode,
    });
  }
  //---------------------history----------------------------
}
