import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

export class Register {
  courseCode!: string;
  courseSection!: string;
}

@Injectable({
  providedIn: 'root'
})
export class StudentregistrationService {

  REST_API: string = 'http://localhost:3000/studentregistration/';
  httpHeaders = new HttpHeaders().set('Content-Type','application/json');

  constructor(private httpClient : HttpClient) { }

  AddCourse(data: Register,studentID: any):Observable<any>{
    let API_URL = `${this.REST_API}Register/Add`;
    return this.httpClient.post(API_URL, data)
    .pipe(catchError(this.handleError));
  }

  GetCourse() {
    return this.httpClient.get(`${this.REST_API}Course/All`);
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
