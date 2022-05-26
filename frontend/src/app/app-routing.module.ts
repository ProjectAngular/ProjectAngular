import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddCourseComponent } from './components/add-course/add-course.component';
import { CourseDetailComponent } from './components/course-detail/course-detail.component';
import { CourseListComponent } from './components/course-list/course-list.component';
import {MainComponent} from "./components/main/main.component";
import { StudentRegisterComponent } from './components/student-register/student-register.component';
import { TableTeacherComponent } from './components/table-teacher/table-teacher.component';
import { TableStudentComponent } from './components/table-student/table-student.component';
import { DropComponent } from './components/drop/drop.component';
import { RegisterHistoryComponent } from './components/register-history/register-history.component';


const routes: Routes = [
  {path: '',pathMatch:'full', redirectTo: 'main'},
  {path: 'main',component:MainComponent},
  {path: 'course-list', component: CourseListComponent},
  {path: 'add-course', component: AddCourseComponent},
  {path: 'edit-course/:TID/:CCode', component: CourseDetailComponent},
  {path: 'table-teacher', component: TableTeacherComponent},
  {path: 'table-student', component: TableStudentComponent},
  {path: 'student-register', component: StudentRegisterComponent},
  {path: 'drop', component: DropComponent},
  {path: 'register-history', component: RegisterHistoryComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
