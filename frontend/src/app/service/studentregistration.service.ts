import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

export class Register {
  courseCode!: string;
  courseSection!: string;
}

export class History {
  h_id!: number;
  courseCode!: string;
  studentID!: string;
  status!: string;
  year!: string;
}

@Injectable({
  providedIn: 'root'
})
export class StudentregistrationService {

  REST_API: string = 'http://localhost:3000/studentregistration/';
  httpHeaders = new HttpHeaders().set('Content-Type','application/json');

  constructor(private httpClient : HttpClient) { }

  Register(data: Register,studentID: any):Observable<any>{
    let API_URL = `${this.REST_API}Register/Add`;
    return this.httpClient.post(API_URL, data)
    .pipe(catchError(this.handleError));
  }

  GetCourse() {
    return this.httpClient.get(`${this.REST_API}Course/All`);
  }

  GetTableStudent(studentID: any) {
    return this.httpClient.get(`${this.REST_API}StudyTable/${studentID}`);
  }

  Drop(studentID:any, courseCode:any) {
    return this.httpClient.delete(`${this.REST_API}Drop/${studentID}/${courseCode}`);
  }

  GetHistory(studentID:any){
    return this.httpClient.get(`${this.REST_API}Studenthistory/${studentID}`);
  }

  GetCourseOne(courseCode:any){
    return this.httpClient.get(`http://localhost:3000/registration/Course/${courseCode}`);
  }

  handleError(error: any) {
    let errorMessage = 'ข้อมูลไม่ถูกต้อง กรุณาลองใหม่อีกครั้ง';
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
