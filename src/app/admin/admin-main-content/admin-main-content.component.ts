import { Component, Input, OnInit } from '@angular/core';
import { course } from '../../models/course.model';
import { CourseserveService } from 'src/app/service/courseserve.service';
import{instructor } from '../../models/instructor.model'
import { InstructorserviceService } from 'src/app/service/instructorservice.service';
import { StudentserveService } from 'src/app/service/studentserve.service';

@Component({
  selector: 'app-admin-main-content',
  templateUrl: './admin-main-content.component.html',
  styleUrls: ['./admin-main-content.component.css']
})
export class AdminMainContentComponent implements OnInit {

  courses!: any
  instructors!: any
  students!:any
  constructor(private httpserve:CourseserveService, private instserve:InstructorserviceService, private stuserve:StudentserveService) { }

  ngOnInit(): void {
    this.getallcourses()
    this.getallInstructors()
    this.getallStudents()
  }

  getallcourses(){
    return this.httpserve.getcourses().subscribe((res)=>{this.courses= res

    console.log(this.courses)
    })

  }

  getallInstructors(){
    this.instserve.getAllInstructros().subscribe(
      (res)=>{this.instructors=res.instructors;
        console.log(res)
       // console.log(this.instructors[7].courseofinstructor[0].title)
      })
  }

  getallStudents(){
    this.stuserve.getAllStudents().subscribe(
      (res)=>{this.students=res.students;
        console.log(res)
       // console.log(this.instructors[7].courseofinstructor[0].title)
      })
  }

}
