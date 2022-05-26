import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

export class Course {
  courseCode!: string;
  courseTitle!: string;
  courseCredit!: number;
  courseTimestart!: string;
  courseTimeend!: string;
  courseDate!: string;
  courseLocation!: string;
  courseOnline!: string;
  courseSection!: string;
}

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  REST_API: string = 'http://localhost:3000/registration/';
  httpHeaders = new HttpHeaders().set('Content-Type','application/json');

  constructor(private httpClient : HttpClient) { }

  AddCourse(data: Course,teacherID: any): Observable<any>{
    let API_URL = `${this.REST_API}Course/Add/${teacherID}`;
    return this.httpClient.post(API_URL, data)
    .pipe(catchError(this.handleError));
  }

  GetCourse() {
    return this.httpClient.get(`${this.REST_API}Course/All`);
  }

  GetCourseOne(courseCode: string) {
    return this.httpClient.get(`${this.REST_API}Course/${courseCode}`);
  }

  GetTableTeacher(teacherID: any) {
    return this.httpClient.get(`${this.REST_API}Courseowner/Teachowner/${teacherID}`);
  }

  GetStudentListOrderByCourse(teacherID: string, courseCode: string) {
    return this.httpClient.get(`${this.REST_API}Course/Detail/${teacherID}/${courseCode}`);
  }

  UpdateDate(code:string,section:string,data:Course) {
    return this.httpClient.put<Course>(`${this.REST_API}Course/Edit/${code}/${section}`,data);
  }

  Remove(courseID:number){
    return this.httpClient.delete(`${this.REST_API}Course/Delete/${courseID}`);
  }

  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
}
