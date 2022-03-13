import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FeedbackService } from '../feedback.service';
import { studentCourse } from '../models/studentCourse.model';
import { InstructorserviceService } from '../service/instructorservice.service';
import { StudentserveService } from '../service/studentserve.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-feed-back-form',
  templateUrl: './feed-back-form.component.html',
  styleUrls: ['./feed-back-form.component.css']
})
export class FeedBackFormComponent implements OnInit {
  mess?:object
  data!: any
  feed!: any
  user!: any
  newFeedback=new studentCourse()
  constructor(private feedback:FeedbackService,private activeroute:ActivatedRoute, private instserve: InstructorserviceService,private userService: UserService,private stu :StudentserveService) { }
  id:number=(this.activeroute.snapshot.params['id']) as number;
  ngOnInit(): void {
    this.userService.userlogin().subscribe((res) => {
      this.user = res;
      if (this.user.role == 'student'){
        this.getcoursesofstu()
       
      }

    })
  }
  getcoursesofstu(){
    this.stu.coursesofstu(this.id).
    subscribe((res)=>{this.data=res
    
    })
      }
  addFeedback(){
    this.feedback.saveData(this.id,this.newFeedback).subscribe
    ((res) => { this.feed = res })
  }
  
  refresh() {
    window.location.reload();
  }
}
