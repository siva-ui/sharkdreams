import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http:HttpClient) { }
  checkUserinDB(userDetails){
    let response = this.http.post('http://localhost:3000/user/login', userDetails)
    return response
  }
}
