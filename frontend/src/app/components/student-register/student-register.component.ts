import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentregistrationService } from 'src/app/service/studentregistration.service';

@Component({
  selector: 'app-student-register',
  templateUrl: './student-register.component.html',
  styleUrls: ['./student-register.component.css']
})
export class StudentRegisterComponent implements OnInit {

  year: string = '1/2565';

  studentRegisterGroup: FormGroup

  constructor(
    public formBuilder: FormBuilder,
    private sService: StudentregistrationService
  ) {
    this.studentRegisterGroup = this.formBuilder.group({
      courseCode: [''],
      courseSection: [''],
      studentID: [''],
      year: ['']
    })
   }

  ngOnInit(): void {

  }

  onSubmit(){
    console.log(this.studentRegisterGroup.value);
    this.sService.Register(this.studentRegisterGroup.value, this.studentRegisterGroup.value.studentID)
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
