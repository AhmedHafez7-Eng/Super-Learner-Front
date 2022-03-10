import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {UserService} from '../user.service';
@Injectable({
  providedIn: 'root'
})
export class AdminService implements CanActivate {
  user!:any
  constructor(private userService: UserService) { }
  canActivate():boolean{
    this.userService.userlogin().subscribe(res=>this.user=res)
    if(this.user.role=='admin')
              return true;
              else
              return false
  }
  
}
