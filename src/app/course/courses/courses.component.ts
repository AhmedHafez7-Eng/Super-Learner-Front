import { Component, OnInit } from '@angular/core';
import { course } from 'src/app/models/course.model';
import { CourseserveService } from 'src/app/service/courseserve.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  constructor(private httpserve:CourseserveService) { }
courses!:any
  ngOnInit(): void {
   this.getallcourses()
  }
getallcourses(){
  return this.httpserve.getcourses().subscribe((res)=>{this.courses= res
  console.log(this.courses)
  })
  
}
}
