import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationService } from 'src/app/service/registration.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {

  courseGroup: FormGroup

  constructor(
    public formBuilder: FormBuilder,
    private registrationService: RegistrationService
  ) {
    this.courseGroup = this.formBuilder.group({
      courseCode: [''],
      courseTitle: [''],
      courseCredit: [''],
      courseTimestart: [''],
      courseTimeend: [''],
      courseDate: [''],
      courseLocation: [''],
      courseOnline: [''],
      courseSection: [''],
      teacherID:['']
    })
  }

  ngOnInit(): void {

  }

  onSubmit(){
    this.registrationService.AddCourse(this.courseGroup.value, this.courseGroup.value.teacherID)
    .subscribe(() => {
    }, (err) => {
      console.log(err);
    })
  }
}
