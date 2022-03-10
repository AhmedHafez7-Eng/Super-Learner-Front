import { Component, OnInit } from '@angular/core';
import { course } from '../models/course.model';
import { CourseserveService } from '../service/courseserve.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-addcourse',
  templateUrl: './addcourse.component.html',
  styleUrls: ['./addcourse.component.css']
})
export class AddcourseComponent implements OnInit {
course=new course()
mess?:object
  constructor(private courseserve:CourseserveService,private activeroute:ActivatedRoute) { }
 id:number=(this.activeroute.snapshot.params['id']) as number;
  ngOnInit(): void {
  }
add(){
  this.course.instructor_id=this.id
  console.log(this.course)
  this.courseserve.add(this.course).subscribe((res)=>{this.mess=res
   
  }
  )
}
selectedFile(e:any){}
}
