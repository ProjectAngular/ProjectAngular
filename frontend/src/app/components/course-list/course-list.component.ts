import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { Course, RegistrationService } from 'src/app/service/registration.service';
@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  Courses:any = [];
  Student:any =[];

  teacherGroup!: FormGroup;

  displayedColumns: string[] = ['No', 'Code', 'Title', 'Section',  'Credit', 'Start','End', 'Date', 'Location', 'Online', 'Detail'];

  constructor(
    public formBuilder: FormBuilder,
    private registrationService: RegistrationService
  ) {
    this.teacherGroup = this.formBuilder.group({
      teacherID:['']
    })
  }
  ngOnInit(): void {
  }

  onSubmit(){
    this.registrationService.GetTableTeacher(this.teacherGroup.value.teacherID).subscribe(res => {
      console.log(res)
      this.Courses = res;
    })
  }

  Delete(id:number){
    if(window.confirm('Doyou want to go ahead')){
      for(let i=0;i<Course.length;i++)
      this.registrationService.Remove(this.Courses[i].courseID).subscribe(res => {
        console.log(res)
        this.Student = res;
      })
    }
  }
}
