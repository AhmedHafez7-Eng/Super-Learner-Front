import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, HostListener } from '@angular/core';
import { section } from '../models/section.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TestseserveService } from '../service/testseserve.service';
import { PostseserveService } from '../service/postseserve.service';
import { test } from '../models/test.model';
import { post } from '../models/post.model';
@Component({
  selector: 'app-course-content',
  templateUrl: './course-content.component.html',
  styleUrls: ['./course-content.component.css'],
})
export class CourseContentComponent implements OnInit {
  height: number = 72;
  constructor(
    private activeroute: ActivatedRoute,
    private testhttp: TestseserveService,
    private posthttp: PostseserveService
  ) {}
  course_id: number = this.activeroute.snapshot.params['id'] as number;
  test_course!: any;
  post_course!: any;
  ngOnInit(): void {
    this.getquiz();
  }

  postView: boolean = false;
  getquiz() {
    this.testhttp.gettest(this.course_id).subscribe((res) => {
      console.log(res);
      this.test_course = res;
    });
  }

  getpost() {
    if (!this.postView) {
      this.scoreView = false;
      this.test = false;
      this.secNum = 0;
      this.postView = true;
    }
    this.posthttp.getpost(this.course_id).subscribe((res) => {
      this.post_course = res;
    });
  }

  // posts!: any
  // postInfo!:any
  // postClicked(post_id:number){
  //     this.posthttp.getquestions(post_id).subscribe((res)=>{
  //       console.log(res)
  //       this.ques = res
  //     })

  //     this.posthttp.getTestInfo(post_id).subscribe((res)=>{
  //       console.log(res)
  //       this.testInfo=res})
  // }

  //////////////
  @HostListener('window:scroll', [])
  onWindowScroll(side: any) {
    var scroll =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    if (scroll < 72) {
      if (this.height > 0) {
        this.height--;
      } else {
        if (scroll < 72) {
          this.height += scroll;
        }
        if ((scroll = 72)) {
          this.height = scroll;
        }
      }
    } else {
      this.height = 0;
    }
  }

  section: section[] = [
    {
      id: 1,
      title: 'section 1',
      videoURL: 'https://www.youtube.com/embed/hMJXrpn8c8Y',
      courseContent:
        'Think you do not need to go over the basics? Think again. Like in any field, getting a good grasp of the fundamentals is critically important to achieving long-term success. The information you learn at the beginning of your programming education or coding bootcamp will allow you to grasp the logic of more complicated topics further along. If you don’t learn basic computer programming, you could fall behind in the future. So, even if the fundamentals seem boring or unimportant at first, you need to recognize how essential it is to learn them.',
    },
    {
      id: 2,
      title: 'section 2',
      videoURL: 'https://youtu.be/embed/FIIHEHklga0',
      courseContent:
        "Knowing when to ask for help is a skill you'll need throughout the course of your life, not just in your coding career. The fact of the matter is, you aren’t going to know everything, especially when you’re just starting out. The fastest and easiest way to gain the skills you need to have for a successful coding career is to ask those who have the answers. After you try to figure out the answer to your question on your own, be sure to ask someone else. Whether you do it in person or online, speaking to your mentor or teacher and listening to what they have to say is critical when you are learning to become a computer programmer.",
    },
    {
      id: 3,
      title: 'section 3',
      videoURL: 'https://youtu.be/embed/mrdJWYVdvVg',
      courseContent:
        'If you really want to learn how to code, you need to do more than just read the book and take some notes — you need to put the information you’re learning into action. You might be surprised at how something you read can seem so simple until you try to do it for yourself. Therefore, you should actually start coding as you’re learning. That way, you put the information to use immediately. When you learn by doing, the information will be more likely to stick with you.',
    },
    {
      id: 4,
      title: 'section 4',
      videoURL: 'https://www.youtube.com/embed/jCM7unYh71E',
      courseContent:
        'These days, you can find countless sources of information on the internet on just about any topic. This information can be especially helpful when you are learning how to code. Whether you decide to sign up for a coding boot camp or simply want to check out free tutorials on YouTube or other streaming services, you can learn a lot about coding by just going online. One of the main benefits of learning this way is that you can find the answers you need in many different formats. Therefore, if one explanation doesn’t make sense to you, you can always find a different explanation elsewhere. Seeking out additional resources on becoming a computer programmer will help you take your coding career to the next level.',
    },
    {
      id: 5,
      title: 'section 5',
      videoURL: 'https://www.youtube.com/embed/o7AJVMrwHUg',
      courseContent:
        "It might seem old school, but if you really want to succeed in computer programming, especially if you are seeking a coding career, learning to code by hand is one of the most important skills you can learn. First of all, it will make you a better coder because you’ll have to be more intentional — you won’t be able to run your code halfway through to see if it works. This results in an increased level of precision. But learning to code by hand doesn’t just improve your skills; it can also help you get a job and jumpstart your coding career. Employers looking to hire computer programmers often require applicants to take a coding test that involves coding by hand. Therefore, it's essential that you acquire this skill.",
    },
  ];

  role = 'student';
  secNum: number = 1;
  test: boolean = false;
  section1Clicked() {
    this.secNum = 1;
    this.test = false;
    this.postView = false;
  }
  section2Clicked() {
    this.secNum = 2;
    this.test = false;
    this.postView = false;
  }
  section3Clicked() {
    this.secNum = 3;
    this.test = false;
    this.postView = false;
  }
  section4Clicked() {
    this.secNum = 4;
    this.test = false;
    this.postView = false;
  }
  section5Clicked() {
    this.secNum = 5;
    this.test = false;
    this.postView = false;
  }

  ques!: any;
  testInfo!: any;
  testClicked(test_id: number) {
    if (!this.scoreView) {
      this.secNum = 0;
      this.postView = false;
      this.test = true;
    }
    this.testhttp.getquestions(test_id).subscribe((res) => {
      console.log(res);
      this.ques = res;
    });

    this.testhttp.getTestInfo(test_id).subscribe((res) => {
      console.log(res);
      this.testInfo = res;
    });
  }

  form = new FormGroup({
    gender: new FormControl('', Validators.required),
  });
  score: number = 0;
  scoreView: boolean = false;
  testSubmit(testForm: any) {
    for (let index = 0; index < this.ques.length; index++) {
      let k = index + 1;
      let j = `question${k}`;

      if (
        Object.values(testForm.value.valueOf(j))[index] ==
        this.ques[index].correct_answer
      ) {
        this.score++;
      }
    }
    this.test = false;
    this.scoreView = true;
  }
}
