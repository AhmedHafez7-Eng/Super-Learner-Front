import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { course } from 'src/app/models/course.model';
import { payment } from 'src/app/models/payment.model';
import { CourseserveService } from 'src/app/service/courseserve.service';
import { PaymentService } from 'src/app/service/payment.service';
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

  constructor(private payserve:PaymentService,private courseserve:CourseserveService,private userService: UserService,private router:Router,private student:StudentserveService) { }
user!:any
action!:boolean
ids!:any
mess!:object
permission!:any
fatoohrares!:any
url?:string

  ngOnInit(): void {
    this.userService.userlogin().subscribe((res)=>{this.user=res
    if(this.user.role=='instructor')
    this.action=false
    else this.action=true

    })
  }
enroll(){
  console.log(this.user.fname)
  this.payserve.payment({fname:this.user.fname,phone:this.user.phone,email:this.user.email}).subscribe((res)=>{
  console.log(res)
    this.fatoohrares=res
    this.url=this.fatoohrares.Data.InvoiceURL
    //window.location.href=this.url

  })
  if(!this.action){
  if(confirm('Enrolling for Students Only, Please Register as Student!')){
    this.router.navigateByUrl('register')
  }
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
    this.permission='Please Enroll to Access Course Content'
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