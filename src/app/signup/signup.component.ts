import { Component, OnInit } from '@angular/core';
import { SignupService } from '../signup.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  name: string;
  userName: string;
  password: any;
  statusObject: any;
  userExist: boolean;
  pageError: any;
  loginSuccess: any;

  constructor(private signUpSer: SignupService, private router: Router) { }
  ngOnInit() {
    this.pageError = false
  }
  onClickSignup() {
    var userDetails = {
      name: this.name,
      userName: this.userName,
      password: this.password
    }
    this.signUpSer.signup(userDetails).subscribe((data) => {
      this.statusObject = data
      console.log(this.statusObject)
      if (this.statusObject.status === 401) {
        this.userExist = true;
        this.userName = null;
        this.password = null;
      }
      else if (this.statusObject.status === 200) {
        this.userExist = false;
        this.loginSuccessful()
      } else {
        this.pageError = true
      }
    })
  }
  loginSuccessful() {
    this.loginSuccess = true;
    var timeOut = this.router.navigate(['/login'])
  }
}
