import { Component, OnInit } from '@angular/core';

import { RegistrationService } from 'src/app/service/registration.service';
@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  Courses:any = [];
  displayedColumns: string[] = ['No', 'Code', 'Title', 'Section',  'Credit', 'Start','End', 'Date', 'Location', 'Online', 'Detail'];

  constructor(private registrationService: RegistrationService) { }

  ngOnInit(): void {
    this.registrationService.GetCourse().subscribe(res => {
      console.log(res)
      this.Courses = res;
    })
  }

  ShowDetail(id: number){
    
  }
}
