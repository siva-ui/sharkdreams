import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserlogService {
  token: any;
  httpOptions: any;
  isTimerOn: boolean;
  id: any
  constructor(private http: HttpClient) { }
  logSave(model) {
    this.token = localStorage.getItem('authToken')
    this.httpOptions = ({
      headers: new HttpHeaders({
        'Authorization': this.token
      })
    })
    let response = this.http.post('http://localhost:3000/log/logsave', model, this.httpOptions)
    return response
  }
  logGet(userId) {
    this.token = localStorage.getItem('authToken')
    this.httpOptions = ({
      headers: new HttpHeaders({
        'Authorization': this.token
      })
    })
    let response = this.http.get('http://localhost:3000/log/loggetbyid/' + userId, this.httpOptions)
    return response
  }
  deleteLog(logId) {
    this.token = localStorage.getItem('authToken')
    this.httpOptions = ({
      headers: new HttpHeaders({
        'Authorization': this.token
      })
    })
    let response = this.http.delete('http://localhost:3000/log/deletelogbyid/' + logId, this.httpOptions)
    return response
  }
}
