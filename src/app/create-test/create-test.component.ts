import { Component, OnInit } from '@angular/core';
import { course } from 'src/app/models/course.model';
import { ActivatedRoute } from '@angular/router';
import { InstructorserviceService } from 'src/app/service/instructorservice.service';
import { instructor } from 'src/app/models/instructor.model';
import { UserService } from 'src/app/service/user.service';
import { StudentserveService } from 'src/app/service/studentserve.service';
import { TestseserveService } from '../service/testseserve.service';
import { test } from '../models/test.model';
import { testDetails } from '../models/testDetails.model';

@Component({
  selector: 'app-create-test',
  templateUrl: './create-test.component.html',
  styleUrls: ['./create-test.component.css']
})
export class CreateTestComponent implements OnInit {

  user!: any
  data!: any
  test!:any
  newCourse=new test()
  newQuestion=new testDetails()
  selectedCourse!:any
  testget!:number


  constructor(private testService:TestseserveService,private userService: UserService, private activeroute: ActivatedRoute, private instserve: InstructorserviceService) { }

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
    
  addTest(){
    
    this.testService.addtest(this.newCourse).subscribe
    ((res) => { this.data = res });
  }  
  CheckTests(){
    console.log("hello");
    
    this.testService.gettest(this.testget).subscribe
    ((res) => { this.test = res });
  }
  addQuestion(){
    console.log(this.newQuestion);
    
    this.testService.addQuestion(this.newQuestion).subscribe
    ((res) => { this.data = res });
  }

}
