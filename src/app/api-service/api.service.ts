import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable()
export class ConfigService {
  constructor(private http: HttpClient) { }
  getSum(num1:any,num2:any): Observable<any>{
      let params = new HttpParams();
  
      params=params.set('number1',num1);
      params=params.set('number2', num2);
     
     return this.http.get("http://localhost:8080/addition/",{
      params})
  }
  postEquation(obj_equation:any):Observable<any>{
      return this.http.post<any>("http://localhost:8080/post",{obj_equation:obj_equation});
  }
}