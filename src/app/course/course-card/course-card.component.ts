import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { course } from 'src/app/models/course.model';
import { CourseserveService } from 'src/app/service/courseserve.service';
import { StudentserveService } from 'src/app/service/studentserve.service';
import { UserService } from 'src/app/service/user.service';
@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {
@Input()
coursesfrompare!:course

  constructor(private courseserve:CourseserveService,private userService: UserService,private router:Router,private student:StudentserveService) { }
user!:any
action!:boolean
ids!:any
mess!:object
permission!:any
  ngOnInit(): void {
    this.userService.userlogin().subscribe((res)=>{this.user=res
    if(this.user.role=='instructor')
    this.action=false
    else this.action=true
   
    })
  }
enroll(){
  if(!this.action){
  alert('please regist as student')
  this.router.navigateByUrl('register')
}
else{
 this.ids={student_id:this.user.id,course_id:this.coursesfrompare.id}
  this.student.enrolle(this.ids).subscribe((res)=>{
    this.mess=res
   this.permission=false
   
  })

}

}
ifenroll(){
  this.ids={user_id:this.user.id,course_id:this.coursesfrompare.id}
  this.userService.ifenroll(this.ids).subscribe(
    (res)=>{if (res==0)
    this.permission='pleaze enrolle to see content'
    else {if(res==1)
    this.router.navigateByUrl('course-content/{this.user.id}')
    else this.permission=res}
  })}





cardContent=[
  {img:'../../../assets/images/blog_2.jpg',name:'Hotel Management',
  desc:'Lorem ipsum door sit amet, fugiat deicata avise id cum, no quomaiorum intel ogrets geuiat operts elicata libere avisse idcumlegebat, liber regione eu si',
rate:4},
 {img:'../../../assets/images/blog_2.jpg',name:'Engineering',
  desc:'Lorem ipsum door sit amet, fugiat deicata avise id cum, no quomaiorum intel ogrets geuiat operts elicata libere avisse idcumlegebat, liber regione eu si',
rate:4},
 {img:'../../../assets/images/blog_2.jpg',name:'programming',
  desc:'Lorem ipsum door sit amet, fugiat deicata avise id cum, no quomaiorum intel ogrets geuiat operts elicata libere avisse idcumlegebat, liber regione eu si',
rate:4}
]
}
