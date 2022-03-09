import { Component, OnInit } from '@angular/core';
import { InstructorserviceService } from 'src/app/service/instructorservice.service';
@Component({
  selector: 'app-admin-instructors',
  templateUrl: './admin-instructors.component.html',
  styleUrls: ['./admin-instructors.component.css']
})
export class AdminInstructorsComponent implements OnInit {

  instructors!: any

  constructor(private instserve:InstructorserviceService) { }

  ngOnInit(): void {
    this.getallInstructors()
  }
  getallInstructors(){
    this.instserve.getAllInstructros().subscribe(
      (res)=>{this.instructors=res.instructors;
        console.log(res)
       // console.log(this.instructors[7].courseofinstructor[0].title)
      })
  }
}
