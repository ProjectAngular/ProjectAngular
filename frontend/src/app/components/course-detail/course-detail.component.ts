import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Course, RegistrationService } from 'src/app/service/registration.service';
import { StudentregistrationService } from 'src/app/service/studentregistration.service';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {

  getTeacherID!:any;
  getCourseCode!:any;
  Courses: any = [];
  Students: any = [];
  updateForm!:FormGroup;
  registerForm!:FormGroup;
  courseCode!:string;
  courseTitle!:string;
  courseCredit!:number;
  courseTimestart!:string;
  courseTimeend!:string;
  courseDate!:string;
  courseLocation!:string;
  courseOnline!:string;
  courseSection!:string;
  year: string = '1/2565';

  displayedColumns: string[] = ['ID', 'Name'];


  constructor(
    private activatedRoute: ActivatedRoute,
    private registrationService: RegistrationService,
    private sService:StudentregistrationService,
    private fb: FormBuilder
  ) {
    this.getTeacherID = this.activatedRoute.snapshot.paramMap.get('TID');
    this.getCourseCode = this.activatedRoute.snapshot.paramMap.get('CCode');
    console.log(this.getTeacherID, this.getCourseCode)
    this.registrationService.GetCourseOne(this.getCourseCode).subscribe(res => {
      console.log(res)
      this.Courses = res;
      this.courseCode = this.Courses.courseCode;
      this.courseTitle = this.Courses.courseTitle;
      this.courseCredit = this.Courses.courseCredit;
      this.courseTimestart = this.Courses.courseTimestart;
      this.courseTimeend = this.Courses.courseTimeend;
      this.courseDate = this.Courses.courseDate;
      this.courseLocation = this.Courses.courseLocation;
      this.courseOnline = this.Courses.courseOnline;
      this.courseSection = this.Courses.courseSection;
      this.updateForm.setValue({
        courseCode:this.courseCode,
        courseTitle:this.courseTitle,
        courseCredit:this.courseCredit,
        courseTimestart:this.courseTimestart,
        courseTimeend:this.courseTimeend,
        courseDate:this.courseDate,
        courseLocation:this.courseLocation,
        courseOnline:this.courseOnline,
        courseSection:this.courseSection
      })
      this.registerForm = this.fb.group({

        courseCode: this.Courses.courseCode,
        courseSection: this.Courses.courseSection,
        studentID: [''],
        year: ['']
      })
    })
    this.updateForm = this.fb.group({
      courseCode:[''],
      courseTitle:[''],
      courseCredit:[''],
      courseTimestart:[''],
      courseTimeend:[''],
      courseDate:[''],
      courseLocation:[''],
      courseOnline:[''],
      courseSection:['']
    })

  }

  ngOnInit(): void {
    this.registrationService.GetStudentListOrderByCourse(this.getTeacherID, this.getCourseCode).subscribe(res => {
      console.log(res)
      this.Students = res;
    })
  }
  onSubmit(){
    this.registrationService.UpdateDate(this.getCourseCode,this.courseSection,this.updateForm.value)
    .subscribe(() => {
      console.log(this.getCourseCode,this.courseSection,this.updateForm.value)
    }, (err) => {
      console.log(err);
    })
  }

  onSubmitRegister(){
    console.log(this.registerForm.value);
    this.sService.Register(this.registerForm.value, this.registerForm.value.studentID)
    .subscribe(() => {
    }, (err) => {
      console.log(err);
    })
  }
}
