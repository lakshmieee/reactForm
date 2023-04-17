import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  public getUsers():Observable<any>{
      return this.http.get('https://gorest.co.in/public/v2/users')
    
  }

  public getValue(): Observable<any>{   
      return this.http.get('https://gorest.co.in/public/v2/todos');  
  }

  public getUserById(userId:string):Observable<any>{
    let param=new HttpParams().append('id',userId);
    return this.http.get('https://gorest.co.in/public/v2/users',{params:param});
  }

  public postUser(userObj:any):Observable<any>{
    let body=JSON.stringify(userObj);
    return this.http.post('https://reqres.in/api/users', body);
  }
  
}
