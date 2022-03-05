import { Component, OnDestroy, OnInit } from '@angular/core';

import {UserService} from '../../service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
user!:any
  loggedIn: any;
  check!: any;
//dataobservable!:Subscription
constructor(private userService: UserService,private activeroute:Router){}
  ngOnInit(): void {
    this.check = localStorage.getItem('token');
  }

  logout(): void {
    this.userService.logout();
    this.activeroute.navigate(['/login'])
  }

//   ngOnDestroy(): void {
//     this.dataobservable.unsubscribe
// }
//
}
