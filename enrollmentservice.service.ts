import { Injectable } from '@angular/core';
import {HttpClient } from  '@angular/common/http'
import {User} from './user';
import {catchError} from 'rxjs/operators';
import {throwError} from 'rxjs';
import {HttpErrorResponse} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentserviceService {

  constructor(private _http:HttpClient) { }
  private _url='http://localhost:8080/enroll';

  enroll(user:User){
    return this._http.post<any>(this._url,user )
      .pipe(catchError(this.errorHandler));
      
  }

  errorHandler(error:HttpErrorResponse){
      return throwError(error);
        
  }
}

