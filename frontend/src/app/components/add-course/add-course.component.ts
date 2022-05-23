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
    private router: Router,
    private ngZone: NgZone,
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
      // this.ngZone.run(() => this.router.navigateByUrl('/index'))
    }, (err) => {
      console.log(err);
    })

    // this.registerService.Addcourseowner(this.courseGroup.value)
    // .subscribe(() => {
    //   console.log(this.courseGroup.value)
    //   this.ngZone.run(() => this.router.navigateByUrl('/index'))
    // }, (err) => {
    //   console.log(err);
    // })
  }
}
