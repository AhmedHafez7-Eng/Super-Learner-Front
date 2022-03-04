import { Component, OnInit } from '@angular/core';
import { course } from 'src/app/models/course.model';
import { ActivatedRoute } from '@angular/router';
import { InstructorserviceService } from 'src/app/service/instructorservice.service';
import { instructor } from 'src/app/models/instructor.model';
import { UserService } from 'src/app/service/user.service';
@Component({
  selector: 'app-my-courses',
  templateUrl: './my-courses.component.html',
  styleUrls: ['./my-courses.component.css']
})
export class MyCoursesComponent implements OnInit {

  constructor(private activeroute:ActivatedRoute,private instserve:InstructorserviceService,private userService: UserService,) { }
  instructor_id:number=(this.activeroute.snapshot.params['id']) as number;
data!:any
  ngOnInit(): void {
   this.getcourses(this.instructor_id)
  }
getcourses(id:number){
  this.instserve.getone(this.instructor_id).subscribe
  ((res)=>{this.data=res})}
  id_user=this.userService.getwhologin().id
  // cardContent: course[] = [
  //   {
  //     id: 1,
  //     title: 'php',
  //     desc: 'lorem lorem lorem',
  //     max_score: 50,
  //     instructor_id: 1,
  //     img: '../../../assets/images/blog_2.jpg'
  //   },
  //   {
  //     id: 2,
  //     title: 'laravel',
  //     desc: 'lorem lorem lorem',
  //     max_score: 50,
  //     instructor_id: 1,
  //     img: '../../../assets/images/blog_2.jpg'
  //   },
  //   {
  //     id: 3,
  //     title: 'angular',
  //     desc: 'lorem lorem lorem',
  //     max_score: 50,
  //     instructor_id: 1,
  //     img: '../../../assets/images/blog_2.jpg'
  //   },
  //   {
  //     id: 3,
  //     title: 'angular',
  //     desc: 'lorem lorem lorem',
  //     max_score: 50,
  //     instructor_id: 1,
  //     img: '../../../assets/images/blog_2.jpg'
  //   }
  // ]

}
