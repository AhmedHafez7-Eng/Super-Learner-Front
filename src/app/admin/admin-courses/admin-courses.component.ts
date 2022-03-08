import { Component, OnInit } from '@angular/core';
import { CourseserveService } from 'src/app/service/courseserve.service';
@Component({
  selector: 'app-admin-courses',
  templateUrl: './admin-courses.component.html',
  styleUrls: ['./admin-courses.component.css']
})
export class AdminCoursesComponent implements OnInit {
  courses!: any
  constructor(private httpserve:CourseserveService) { }

  ngOnInit(): void {
    this.getallcourses()
  }
  getallcourses(){
    return this.httpserve.getcourses().subscribe((res)=>{this.courses= res

    console.log(this.courses)
    })

  }
}
