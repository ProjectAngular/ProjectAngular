import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddCourseComponent } from './components/add-course/add-course.component';
import { CourseDetailComponent } from './components/course-detail/course-detail.component';
import { CourseListComponent } from './components/course-list/course-list.component';
import {MainComponent} from "./components/main/main.component";
import { StudentRegisterComponent } from './components/student-register/student-register.component';

const routes: Routes = [
  {path: '',pathMatch:'full', redirectTo: 'main'},
  {path: 'main',component:MainComponent},
  {path: 'course-list', component: CourseListComponent},
  {path: 'add-course', component: AddCourseComponent},
  {path: 'edit-course', component: CourseDetailComponent},
  {path: 'student-register', component: StudentRegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
