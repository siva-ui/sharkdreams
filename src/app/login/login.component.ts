import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userName;
  password;
  token;
  statusObject;
  isLogin
  constructor(private loginSer: LoginService, private router:Router) { }

  ngOnInit() {
  }

  onClickLogin(){
    var userDetails = {
      userName:this.userName,
      password:this.password
    }
    this.loginSer.checkUserinDB(userDetails).subscribe((data) => {
      this.statusObject = data
      if(this.statusObject.status == 200 && this.statusObject.token !== undefined){
        let token;
        if(data){
          token = data['token'];
          localStorage.setItem('authToken', token);
          localStorage.setItem('name', this.statusObject.result.name);
          localStorage.setItem('userName', this.statusObject.result.userName);
          localStorage.setItem('userId', this.statusObject.result.userId)
          this.router.navigate(['/log']);
          this.isLogin = false
        }
      }else
      if(this.statusObject.status == 400){
        console.log(this.statusObject.message)
      }
    })
  }

}
