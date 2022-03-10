import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {UserService} from '../user.service';
@Injectable({
  providedIn: 'root'
})
export class AdminService implements CanActivate {
  user?:any
  constructor(private auth: UserService) { }
  canActivate():boolean{
   // this.userService.userlogin().subscribe(res=>this.user=res)
    if(this.auth.user.role=='admin')
              return true;
              else
              return false
    
  }
  
  // canActivate(
  //   next: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Promise<boolean> | boolean {
  //      return new Promise(resolve =>
  //        this.auth.user()
  //          .then(res=>{
  //            if(this.auth.user.role=='admin') {
  //              this.myRoute.navigate(["login"]);
  //            }
  //            resolve(status);
  //          })
  //          .catch(() => {
  //            this.myRoute.navigate(["login"]);
  //            resolve(false);
  //            // ... or any other way you want to handle such error case
  //          })
  
}
