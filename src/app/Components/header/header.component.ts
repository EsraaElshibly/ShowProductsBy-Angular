import { Component, OnInit } from '@angular/core';
import { UserAuthentaionService } from '../Services/Authentation/user-authentaion.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isUser: boolean
  uName: string =""

  constructor(
    private userAuthentation : UserAuthentaionService 
  ) 
  { 
    this.isUser = this.userAuthentation.isUserLogged

  }

  ngOnInit(): void {
    this.userAuthentation.getLoggedStatus().subscribe(status => 
      {
        this.isUser = status
      })

      this.userAuthentation.getUserName().subscribe(name =>
        {
          this.uName = name
        })
  }

  logOut()
  {
    this.userAuthentation.logOut()
    this.isUser = this.userAuthentation.isUserLogged
  }

}
