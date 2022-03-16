import { Component, OnInit } from '@angular/core';
import { course } from '../models/course.model';
import { CourseserveService } from '../service/courseserve.service';
import { ActivatedRoute } from '@angular/router';
import { InstructorserviceService } from '../service/instructorservice.service';
import { PaymentService } from '../service/payment.service';
import { UserService } from '../service/user.service';
@Component({
  selector: 'app-addcourse',
  templateUrl: './addcourse.component.html',
  styleUrls: ['./addcourse.component.css']
})
export class AddcourseComponent implements OnInit {
course=new course()
selectedfile?:any
mess?:any
course_img!:any
course_id!:number
user!:any
url!: string;
fatoohrares!: any;
  constructor(private userService: UserService, private payserve: PaymentService,private courseserve:CourseserveService,private activeroute:ActivatedRoute,private instserve:InstructorserviceService) { }
 id:number=(this.activeroute.snapshot.params['id']) as number;
  ngOnInit(): void {
    this.userService.userlogin().subscribe((res) => {
      this.user = res;})
  }
add(){
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
  this.payserve.status().subscribe(res=>{
    if(res==1){
  this.course.instructor_id=this.id
  console.log(this.course)
  this.courseserve.add(this.course).subscribe(res=>{console.log(res);
    this.mess=(res)
    this.uploadimg()
  }
    )}
 } )
  }
selectedFile(e:any){
  this.selectedfile= <File> e.target.files[0]
    console.log(this.selectedfile)
}
uploadimg(){
  const fd=new FormData();
  fd.append('course_img',this.selectedfile,this.selectedfile.name)
console.log(fd)
   //this.img={img_name:this.category.img}
    this.instserve.uploadimg(this.mess.id,fd).subscribe((res)=>{
     console.log(event)
    })
}
}
