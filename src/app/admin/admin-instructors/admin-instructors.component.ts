import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/service/admin.service';
import { InstructorserviceService } from 'src/app/service/instructorservice.service';
@Component({
  selector: 'app-admin-instructors',
  templateUrl: './admin-instructors.component.html',
  styleUrls: ['./admin-instructors.component.css']
})
export class AdminInstructorsComponent implements OnInit {

  instructors!: any

  constructor(private instserve:InstructorserviceService,private adminserve:AdminService) { }

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
  message!: any
  deleteinst(id:number){
    if (confirm("Are You Sure?")) {
      this.adminserve.deleteinst(id).subscribe(res => {
        this.message = res
      })
    }
  }

  refresh() {
    window.location.reload()
}
}
