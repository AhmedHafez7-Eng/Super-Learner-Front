import { Component, OnInit } from '@angular/core';
import { course } from 'src/app/models/course.model';
import { ActivatedRoute } from '@angular/router';
import { InstructorserviceService } from 'src/app/service/instructorservice.service';
import { instructor } from 'src/app/models/instructor.model';
import { UserService } from 'src/app/service/user.service';
import { StudentserveService } from 'src/app/service/studentserve.service';
import { PaymentService } from 'src/app/service/payment.service';
@Component({
  selector: 'app-my-courses',
  templateUrl: './my-courses.component.html',
  styleUrls: ['./my-courses.component.css']
})


export class MyCoursesComponent implements OnInit {
user!:any
  constructor(  private payserve: PaymentService,private userService: UserService,private activeroute:ActivatedRoute,private instserve:InstructorserviceService,private stu :StudentserveService) { }
  instructor_id:number=(this.activeroute.snapshot.params['id']) as number;
data!:any
fatoohrares !:any
url!:any
  ngOnInit(): void {
    this.userService.userlogin().subscribe((res)=>{this.user=res
      if(this.user.role=='instructor')
      this.getcourses(this.instructor_id)
    else
    this.getcoursesofstu()
     }
      )



   console.log(this.instructor_id)
   console.log(this.user)
  }
payment(){
  this.payserve
      .payment({
        fname: this.user.fname,
        phone: this.user.phone,
        email: this.user.email,
      })
      .subscribe((res) => {
        console.log(res);
        this.fatoohrares = res;
        this.url = this.fatoohrares.Data.InvoiceURL;
        window.location.href=this.url
      });
}




  getcoursesofstu(){
this.stu.coursesofstu(this.instructor_id).
subscribe((res)=>{this.data=res
console.log(res)
})
  }
getcourses(id:number){
  this.instserve.getone(this.instructor_id).subscribe
  ((res)=>{this.data=res})}
  //id_user=this.userService.getwhologin().id
  // cardContent: course[] = [
  //   {
  //     id: 1,
  //     title: 'php',
  //     desc: 'lorem lorem lorem',
  //     max_score: 50,
  //     instructor_id: 1,
  //     img: 'assets/images/blog_2.jpg'
  //   },
  //   {
  //     id: 2,
  //     title: 'laravel',
  //     desc: 'lorem lorem lorem',
  //     max_score: 50,
  //     instructor_id: 1,
  //     img: 'assets/images/blog_2.jpg'
  //   },
  //   {
  //     id: 3,
  //     title: 'angular',
  //     desc: 'lorem lorem lorem',
  //     max_score: 50,
  //     instructor_id: 1,
  //     img: 'assets/images/blog_2.jpg'
  //   },
  //   {
  //     id: 3,
  //     title: 'angular',
  //     desc: 'lorem lorem lorem',
  //     max_score: 50,
  //     instructor_id: 1,
  //     img: 'assets/images/blog_2.jpg'
  //   }
  // ]

}
