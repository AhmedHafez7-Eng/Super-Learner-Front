import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, HostListener } from '@angular/core';
import { section } from '../models/section.model';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { TestseserveService } from '../service/testseserve.service';
import { test } from '../models/test.model';
@Component({
  selector: 'app-course-content',
  templateUrl: './course-content.component.html',
  styleUrls: ['./course-content.component.css']
})
export class CourseContentComponent implements OnInit {
  height: number = 72;
  constructor(private activeroute:ActivatedRoute,private testhttp:TestseserveService) { }
 course_id:number=(this.activeroute.snapshot.params['id']) as number;
test_course!:any
  ngOnInit(): void {
    this.getquiz()
  }
getquiz(){
  this.testhttp.gettest(this.course_id).subscribe((res)=>{
    console.log(res)
    this.test_course=res})

}









  //////////////
  @HostListener("window:scroll", [])
  onWindowScroll(side: any) {
    var scroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (scroll < 72) {
      if (this.height > 0) {
        this.height--;

      }
      else {
        if (scroll < 72) {
          this.height += scroll;

        }
        if (scroll = 72) {
          this.height = scroll;

        }
      }
    }
    else {
      this.height = 0;
    }
  }




  section: section[] = [
    {
      id: 1,
      title: 'section 1',
      videoURL: 'https://www.youtube.com/embed/hMJXrpn8c8Y',
      courseContent: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio veritatis accusamus provident quia harum soluta labore qui, aliquid praesentium quisquam dolorum sapiente nam minima dicta eum earum, odio ea vitae.'
    },
    {
      id: 2,
      title: 'section 2',
      videoURL: 'https://youtu.be/embed/FIIHEHklga0',
      courseContent: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio veritatis accusamus provident quia harum soluta labore qui, aliquid praesentium quisquam dolorum sapiente nam minima dicta eum earum, odio ea vitae.'
    },
    {
      id: 3,
      title: 'section 3',
      videoURL: 'https://youtu.be/embed/mrdJWYVdvVg',
      courseContent: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio veritatis accusamus provident quia harum soluta labore qui, aliquid praesentium quisquam dolorum sapiente nam minima dicta eum earum, odio ea vitae.'
    },
    {
      id: 4,
      title: 'section 4',
      videoURL: 'https://www.youtube.com/embed/jCM7unYh71E',
      courseContent: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio veritatis accusamus provident quia harum soluta labore qui, aliquid praesentium quisquam dolorum sapiente nam minima dicta eum earum, odio ea vitae.'
    },
    {
      id: 5,
      title: 'section 5',
      videoURL: 'https://www.youtube.com/embed/o7AJVMrwHUg',
      courseContent: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio veritatis accusamus provident quia harum soluta labore qui, aliquid praesentium quisquam dolorum sapiente nam minima dicta eum earum, odio ea vitae.'
    }

  ]


  role='student';
  secNum:number=1;
  test:boolean=false;
  section1Clicked(){
    this.secNum=1;
    this.test=false;
  }
  section2Clicked(){
    this.secNum=2;
    this.test=false;
  }
  section3Clicked(){
    this.secNum=3;
    this.test=false;
  }
  section4Clicked(){
    this.secNum=4;
    this.test=false;
  }
  section5Clicked(){
    this.secNum=5;
    this.test=false;
  }
  ques!: any
  testInfo!:any
  testClicked(test_id:number){
    if (!this.scoreView) {
      this.secNum=0;
      this.test=true;}
      this.testhttp.getquestions(test_id).subscribe((res)=>{
        console.log(res)
        this.ques = res
      })

      this.testhttp.getTestInfo(test_id).subscribe((res)=>{
        console.log(res)
        this.testInfo=res})

  }

  form = new FormGroup({
    gender: new FormControl('', Validators.required)
  });
  score:number=0;
  scoreView:boolean=false;
  testSubmit(testForm:any){

    for (let index = 0; index < this.ques.length; index++) {
      let k = index+1;
      let j=`question${k}`;
      console.log(Object.values(testForm.value.valueOf(j))[index]);

      if (Object.values(testForm.value.valueOf(j))[index]==this.ques[index].correct_answer) {
        this.score++;
      }
    }
    this.test=false;
    this.scoreView=true;

  }
}
