import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common'
import { UserAuthentaionService } from '../Services/Authentation/user-authentaion.service';


@Component({
  selector: 'app-log-in-form',
  templateUrl: './log-in-form.component.html',
  styleUrls: ['./log-in-form.component.scss']
})
export class LogInFormComponent implements OnInit {

  isUser: boolean = false

  constructor(
    private userAuthentation : UserAuthentaionService,
    private location: Location
    
  ) { }

  ngOnInit(): void {
  }

  logIn(uName: string, pass: string)
  {
    this.userAuthentation.logIn(uName, pass)
    this.isUser = this.userAuthentation.isUserLogged
    this.location.back()
  }

}
