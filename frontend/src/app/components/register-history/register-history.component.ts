import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StudentregistrationService } from 'src/app/service/studentregistration.service';

@Component({
  selector: 'app-register-history',
  templateUrl: './register-history.component.html',
  styleUrls: ['./register-history.component.css']
})
export class RegisterHistoryComponent implements OnInit {

  History:any = [];
  studentGroup!: FormGroup;

  displayedColumns: string[] = ['No', 'Code', 'Status'];

  constructor(
    private formBuilder: FormBuilder,
    private sService: StudentregistrationService) {
      this.studentGroup = this.formBuilder.group({
        studentID:['']
      })
    }

  ngOnInit(): void {

  }
  onSubmit(){
    this.sService.GetHistory(this.studentGroup.value.studentID).subscribe(res => {
      console.log(res)
      this.History = res;
    })
  }

}
