import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
@Component({
  selector: 'app-admin-sidebar',
  templateUrl: './admin-sidebar.component.html',
  styleUrls: ['./admin-sidebar.component.css']
})
export class AdminSidebarComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }
  logout(): void {
    this.userService.logout();
    //this.activeroute.navigate(['/login'])
  }
}
