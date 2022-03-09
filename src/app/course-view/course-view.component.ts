import { Component, Input, OnInit } from '@angular/core';
import { course } from '../models/course.model';
import { UserService } from '../service/user.service';
@Component({
  selector: 'app-course-view',
  templateUrl: './course-view.component.html',
  styleUrls: ['./course-view.component.css']
})

export class CourseViewComponent implements OnInit {
  user!:any
  action!:string
  @Input()
  course!:course;
  role!:string
  constructor(private userService: UserService) { }
  
  ngOnInit(): void {
    this.userService.userlogin().subscribe((res)=>{this.user=res
      if(this.user.role=='instructor'){
      this.action='edit'
      this.role='instructor'
    
    }
      else {
        this.action='show your progress'
        this.role='student'
      }
  })
}
  
  

}
