import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  constructor(private http: HttpClient) { }
  signup(userDetails){
    let response = this.http.post('http://localhost:3000/user/signup', userDetails)
    return response
  }
}
