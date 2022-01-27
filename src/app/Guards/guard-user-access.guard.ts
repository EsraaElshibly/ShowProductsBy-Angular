import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserAuthentaionService } from '../Components/Services/Authentation/user-authentaion.service';

@Injectable({
  providedIn: 'root'
})
export class GuardUserAccessGuard implements CanActivate {
  constructor(
    private userAuthentation: UserAuthentaionService,
    private router: Router
  ){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    if(this.userAuthentation.isUserLogged)
    {
      return true;
    }
    else
    {
      alert("Dear..! You Must LogIn First ")
      this.router.navigate(['/Log'])
      return false;
    }
  }
  
}
