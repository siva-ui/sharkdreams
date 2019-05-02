import { Component, OnInit } from '@angular/core';
import { UserlogService } from '../userlog.service';
import { Observable } from 'rxjs';
import { interval } from 'rxjs'

@Component({
  selector: 'app-userlog',
  templateUrl: './userlog.component.html',
  styleUrls: ['./userlog.component.css']
})
export class UserlogComponent implements OnInit {
  loggedName: any;
  timer: any;
  isTimerOn: boolean;
  id: any;
  timerValue: any;
  timerVal: any;
  timerStopped: boolean;
  actionBtn: any;
  description: any;
  userId:any;
  fectchedLog:[];
  logDescription:any
  form:any;
  submitted:any;
  timerStarted:boolean

  constructor(private logSer: UserlogService) { }

  ngOnInit() {
    this.loggedName = localStorage.getItem("name")
    this.userId = localStorage.getItem("userId")
    console.log(this.loggedName)
    console.log(this.userId)
    this.isTimerOn = false
    this.actionBtn = "Start the Session";
    this.description = false;
    this.fetchLog();
    this.timerStopped = false;
    this.timerStarted = false
  }
  startTimer() {
    this.timerStarted = true
      this.description = true
      this.timerValue = interval(1000).subscribe(data => {
        console.log(data)
        this.timerVal = data
      })
  }
  stopTimer() {
    this.timerValue.unsubscribe()
    this.timerStopped = true
    console.log(this.timerVal)
  }
  onSubmit(form){
    if(this.timerStopped = true){
      this.description = form.value
      let logDetails = {
        logDescription: form.value.logDescription,
      userId: this.userId,
      startTimer: 0,
      stopTimer: this.timerVal
    }
    console.log(logDetails.logDescription)
    console.log(logDetails)
    this.logSer.logSave(logDetails).subscribe(data => {
      console.log(data)
    })
    this.logDescription = null
    this.description = false
    this.fetchLog()
    this.timerValue.unsubscribe()
    clearInterval(this.timerValue)
  }
  this.timerStarted = false
}
  fetchLog(){
    this.logSer.logGet(this.userId).subscribe(data => {
      console.log(data)
      this.fectchedLog = data['result']
    });
  }
  onDelete(logId){
    console.log(logId)
    this.logSer.deleteLog(logId).subscribe(data => {
      console.log(data)
    })
    this.fetchLog()
  }
}


