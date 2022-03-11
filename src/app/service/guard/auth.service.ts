import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate{
//   valid!:string
// validation(token:string){
//   this.valid=token
//   }
// getvalidation(){return this.valid}
  constructor(private auth:LoginService,private router:Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
     if(localStorage.getItem('token'))
    {  
      return true}
     else
     { window.alert('Access Denied, Login is Required to Access This Page!');
     this.router.navigate(['/login']);
 
       return false}
  }
}
