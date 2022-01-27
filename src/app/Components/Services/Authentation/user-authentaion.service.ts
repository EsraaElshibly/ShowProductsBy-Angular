import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserAuthentaionService {

  private uName: BehaviorSubject<string>
  private isLogin: BehaviorSubject<boolean>

  constructor() {
    this.isLogin = new BehaviorSubject<boolean> (this.isUserLogged)
    this.uName = new BehaviorSubject<string> ("")
   }

   logIn(uName: string, pass:string)
   {
     let userToken = "122345"
     localStorage.setItem("token" , userToken)
     this.isLogin.next(true)
     this.uName.next(uName)
   }

   logOut()
   {
     localStorage.removeItem("token")
     this.isLogin.next(false)
     this.uName.next("")
   }

   get isUserLogged() : boolean 
   {
     return (localStorage.getItem("token")) ? true : false
   }

   getLoggedStatus() : Observable<boolean>
   {
     return this.isLogin.asObservable()
   }

   getUserName() : Observable<string>
   {
     return this.uName.asObservable()
   }
}
