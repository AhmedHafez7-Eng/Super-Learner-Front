import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
@Component({
  selector: 'app-admin-sidebar',
  templateUrl: './admin-sidebar.component.html',
  styleUrls: ['./admin-sidebar.component.css']
})
export class AdminSidebarComponent implements OnInit {

  id!:number
  user!:any
  loggedIn:any;

  constructor(private userService: UserService) { }

  ngOnInit(): void {

    { this.userService.isUserLoggedIn().subscribe(
      ( status) => {this.loggedIn = status
       console.log('isLogged', this.loggedIn);
      this.userService.userlogin().subscribe(res=>this.user=res)
     }

     );}
  }
  logout(): void {
    this.userService.logout();
    //this.activeroute.navigate(['/login'])
  }
}
