import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RegistrationService } from 'src/app/service/registration.service';

@Component({
  selector: 'app-table-teacher',
  templateUrl: './table-teacher.component.html',
  styleUrls: ['./table-teacher.component.css']
})
export class TableTeacherComponent implements OnInit {

  Courses:any = [];
  teacherGroup!: FormGroup;

  displayedColumns: string[] = ['No', 'Code', 'Title', 'Section',  'Credit', 'Start','End', 'Date', 'Location', 'Online'];

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
      console.log(this.teacherGroup.value.teacherID)
      console.log(res)
      this.Courses = res;
    })
  }

}
