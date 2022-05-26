import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StudentregistrationService } from 'src/app/service/studentregistration.service';
@Component({
  selector: 'app-table-student',
  templateUrl: './table-student.component.html',
  styleUrls: ['./table-student.component.css']
})
export class TableStudentComponent implements OnInit {

  Courses:any = [];
  studentGroup!: FormGroup;

  displayedColumns: string[] = ['No', 'Code', 'Title', 'Section',  'Credit', 'Start','End', 'Date', 'Location', 'Online'];

  constructor(
    private formBuilder: FormBuilder,
    private sService:StudentregistrationService
  ) {
    this.studentGroup = this.formBuilder.group({
      studentID:['']
    })
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.sService.GetTableStudent(this.studentGroup.value.studentID).subscribe(res => {
      console.log(this.studentGroup.value.studentID)
      console.log(res)
      this.Courses = res;
    })
  }
}
