import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { instructor } from "../models/instructor.model";
import { InstructorserviceService } from '../service/instructorservice.service';
@Component({
  selector: 'app-course-info',
  templateUrl: './course-info.component.html',
  styleUrls: ['./course-info.component.css']
})
export class CourseInfoComponent implements OnInit {
data!:any
imgofinst!:any
   constructor(private activeroute:ActivatedRoute,private instserve:InstructorserviceService) { }

  ngOnInit(): void {
    this.getoneinst()
    this.getimage()
  }
  instructor_id:number=(this.activeroute.snapshot.params['id']) as number;

  getoneinst(){
    console.log(this.instructor_id)
    this.instserve.getone(this.instructor_id).
    subscribe((res)=>{
      this.data=res})
  
  }
  getimage(){this.instserve.getimage(this.instructor_id).subscribe((res)=>{
    console.log(res)
    this.imgofinst=res
    })}
    delete(id:number){this.instserve.deletecourse(id).subscribe(
      (res)=>{
      
        //this.getdata();
        console.log (this.data)
      })}
}

