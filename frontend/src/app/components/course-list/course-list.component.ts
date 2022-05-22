import { Component, OnInit } from '@angular/core';

import { RegistrationService } from 'src/app/service/registration.service';
@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  Courses:any = [];
  displayedColumns: string[] = ['Code', 'Title', 'Section',  'Credit', 'TimeStart','TimeEnd', 'Date', 'Location', 'Online'];

  constructor(private registrationService: RegistrationService) { }

  ngOnInit(): void {
    this.registrationService.GetCourse().subscribe(res => {
      console.log(res)
      this.Courses = res;
    })
  }

}
