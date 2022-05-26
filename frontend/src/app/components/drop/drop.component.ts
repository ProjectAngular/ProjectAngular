import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StudentregistrationService } from 'src/app/service/studentregistration.service';

@Component({
  selector: 'app-drop',
  templateUrl: './drop.component.html',
  styleUrls: ['./drop.component.css']
})
export class DropComponent implements OnInit {

  dropGroup:FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    public sService:StudentregistrationService
  ) {
    this.dropGroup = this.formBuilder.group({
      studentID:[''],
      courseCode:['']
    })
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.sService.Drop(this.dropGroup.value.studentID, this.dropGroup.value.courseCode).subscribe(res => {
      console.log(res)
    })
  }

}
