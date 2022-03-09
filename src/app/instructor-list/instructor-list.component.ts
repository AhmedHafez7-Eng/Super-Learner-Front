import { Component, OnDestroy, OnInit } from '@angular/core';
import { InstructorserviceService } from '../service/instructorservice.service';
import{instructor } from '../models/instructor.model'
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-instructor-list',
  templateUrl: './instructor-list.component.html',
  styleUrls: ['./instructor-list.component.css']
})
export class InstructorListComponent implements OnInit  {
  instructors!:any
  courses!:any
  dataobservable!:Subscription
  constructor(private instserve:InstructorserviceService) { }

  ngOnInit(): void {
    this.getdata()
   // this.getcourses()
  }
  getdata(){
    this.instserve.getAllInstructros().subscribe(
      (res)=>{this.instructors=res.instructors;
        console.log(res)
       // console.log(this.instructors[7].courseofinstructor[0].title)
      })
    
    }
   
    // ngOnDestroy(): void {
    //     this.dataobservable.unsubscribe
    // }
  
}
