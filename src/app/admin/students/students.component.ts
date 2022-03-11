import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/service/admin.service';
import { StudentserveService } from 'src/app/service/studentserve.service';
@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  students!: any

  constructor(private stuserve:StudentserveService,private adminserve:AdminService) { }

  ngOnInit(): void {
    this.getallStudents()
  }
  getallStudents(){
    this.stuserve.getAllStudents().subscribe(
      (res)=>{this.students=res.students;
        console.log(res)
       // console.log(this.instructors[7].courseofinstructor[0].title)
      })
  }
  message!:any
  delete(id: number) {

    if (confirm("Are You Sure?")) {
      this.adminserve.deletestudent(id).subscribe(res => {
        this.message = res
      })
    }
  }

  refresh() {
    window.location.reload()
}
}
