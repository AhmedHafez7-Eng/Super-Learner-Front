import { Component, OnInit } from '@angular/core';
import { CourseserveService } from 'src/app/service/courseserve.service';
import { AdminService } from 'src/app/service/admin.service';
@Component({
  selector: 'app-admin-courses',
  templateUrl: './admin-courses.component.html',
  styleUrls: ['./admin-courses.component.css']
})
export class AdminCoursesComponent implements OnInit {
  courses!: any
  constructor(private httpserve:CourseserveService,private adminserve:AdminService) { }

  ngOnInit(): void {
    this.getallcourses()
  }
  getallcourses(){
    return this.httpserve.getcourses().subscribe((res)=>{this.courses= res

    console.log(this.courses)
    })

  }
  deletecourse(id:number){
    this.adminserve.deletecourse(id).subscribe(res=>alert(res))
  }
}
