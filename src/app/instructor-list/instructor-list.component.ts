import { Component, OnInit } from '@angular/core';
import { InstructorserviceService } from '../service/instructorservice.service';
import{instructor } from '../models/instructor.model'
@Component({
  selector: 'app-instructor-list',
  templateUrl: './instructor-list.component.html',
  styleUrls: ['./instructor-list.component.css']
})
export class InstructorListComponent implements OnInit {
  instructors!:any
  courses!:any
  constructor(private instserve:InstructorserviceService) { }

  ngOnInit(): void {
    //this.getdata()
    this.getcourses()
  }
  getdata(){
    this.instserve.getAllInstructros().subscribe(
      (res)=>{this.instructors=res;console.log(res)})
    
    }
    getcourses(){
      this.instserve.getcourses().subscribe((res)=>{this.courses=res})
    }
  
}
