import { Component, OnInit } from '@angular/core';
import { UserAuthentaionService } from 'src/app/Components/Services/Authentation/user-authentaion.service';

@Component({
  selector: 'app-add-user-profile',
  templateUrl: './add-user-profile.component.html',
  styleUrls: ['./add-user-profile.component.scss']
})
export class AddUserProfileComponent implements OnInit {

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

}
