import { Component, OnInit } from '@angular/core';
import { StudentserveService } from 'src/app/service/studentserve.service';
@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  students!: any

  constructor(private stuserve:StudentserveService) { }

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
}
