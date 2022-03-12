import { Component, OnInit } from '@angular/core';
import { CourseserveService } from 'src/app/service/courseserve.service';
import { AdminService } from 'src/app/service/admin.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
@Component({
  selector: 'app-admin-courses',
  templateUrl: './admin-courses.component.html',
  styleUrls: ['./admin-courses.component.css']
})
export class AdminCoursesComponent implements OnInit {
  courses!: any
  constructor(private userService: UserService,private httpserve:CourseserveService,private adminserve:AdminService, private activeroute:Router) { }

  ngOnInit(): void {
    this.userService.blnDisplayMenu=false
    this.getallcourses()
  }
  getallcourses(){
    return this.httpserve.getcourses().subscribe((res)=>{this.courses= res

    console.log(this.courses)
    })

  }
  message?:any
  deletecourse(id: number) {

    if (confirm("Are You Sure?")) {
      this.adminserve.deletecourse(id).subscribe(res => {
        this.message = res
        this.getallcourses()
      })
    }
  }
}
