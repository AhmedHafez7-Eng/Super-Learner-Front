import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InstructorserviceService } from 'src/app/service/instructorservice.service';
import { UserService } from 'src/app/service/user.service';
import { course } from 'src/app/models/course.model';
import { instructor } from 'src/app/models/instructor.model';
import { post } from 'src/app/models/post.model';
import { PostseserveService } from '../service/postseserve.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  user!: any
  data!: any
  test!:any
  selectedCourse!:any
  newPost=new post()

  constructor(private postService:PostseserveService,private userService: UserService, private activeroute: ActivatedRoute, private instserve: InstructorserviceService) { }

  instructor_id: number = (this.activeroute.snapshot.params['id']) as number;

  ngOnInit(): void {
    console.log(this.instructor_id);
    this.userService.userlogin().subscribe((res) => {
      this.user = res;
      if (this.user.role == 'instructor'){
        this.getcourses(this.instructor_id);
      }

    })
  }


  getcourses(id: number){
    this.instserve.getone(this.instructor_id).subscribe
    ((res) => { this.data = res })
  }

  message!: any
  addPost() {

    this.newPost.instructor_id=this.instructor_id

    this.postService.addpost(this.newPost).subscribe
      ((res) => { this.data = res });
    this.message = "Post has been Published"
  }

  refresh() {
    window.location.reload();
  }

}
