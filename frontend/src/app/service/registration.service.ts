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

  GetTeacher() {

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
