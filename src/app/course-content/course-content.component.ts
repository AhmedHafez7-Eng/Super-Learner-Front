
import { Component, OnInit, HostListener } from '@angular/core';
import { section } from '../models/section.model';
import { FormGroup, FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-course-content',
  templateUrl: './course-content.component.html',
  styleUrls: ['./course-content.component.css']
})
export class CourseContentComponent implements OnInit {
  height: number = 72;
  constructor() { }

  ngOnInit(): void {
  }
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
      videoURL: 'https://www.youtube.com/embed/1ozGKlOzEVc',
      courseContent: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio veritatis accusamus provident quia harum soluta labore qui, aliquid praesentium quisquam dolorum sapiente nam minima dicta eum earum, odio ea vitae.'
    },
    {
      id: 2,
      title: 'section 2',
      videoURL: 'https://www.youtube.com/embed/1ozGKlOzEVc',
      courseContent: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio veritatis accusamus provident quia harum soluta labore qui, aliquid praesentium quisquam dolorum sapiente nam minima dicta eum earum, odio ea vitae.'
    },
    {
      id: 3,
      title: 'section 3',
      videoURL: 'https://www.youtube.com/embed/1ozGKlOzEVc',
      courseContent: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio veritatis accusamus provident quia harum soluta labore qui, aliquid praesentium quisquam dolorum sapiente nam minima dicta eum earum, odio ea vitae.'
    },
    {
      id: 4,
      title: 'section 4',
      videoURL: 'https://www.youtube.com/embed/1ozGKlOzEVc',
      courseContent: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio veritatis accusamus provident quia harum soluta labore qui, aliquid praesentium quisquam dolorum sapiente nam minima dicta eum earum, odio ea vitae.'
    },
    {
      id: 5,
      title: 'section 5',
      videoURL: 'https://www.youtube.com/embed/1ozGKlOzEVc',
      courseContent: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio veritatis accusamus provident quia harum soluta labore qui, aliquid praesentium quisquam dolorum sapiente nam minima dicta eum earum, odio ea vitae.'
    }

  ]
  questions=[{
    "Header": "Why We Use <br> Element",
    "Answers": [
        "To Make Text Bold",
        "To Make Text Italic",
        "To Add Breakline",
        "To Create Horizontal Line"
    ],
    "CorrectAnswer": "To Add Breakline",
    "Degree": 10
},
{
    "Header": "Is <img> Element Has Attribute href",
    "Answers": [
        "Yes",
        "No Its For Anchor Tag <a>",
        "All Elements Has This Attribute",
        "Answer 1 And 3 Is Right"
    ],
    "CorrectAnswer": "No Its For Anchor Tag <a>",
    "Degree": 10
},
{
    "Header": "How Can We Make Element Text Bold",
    "Answers": [
        "Putting It Inside <b> Tag",
        "Putting It Inside <strong> Tag",
        "Customizing It With Font-Weight Property In CSS",
        "All Answers Is Right"
    ],
    "CorrectAnswer": "All Answers Is Right",
    "Degree": 10
},
{
    "Header": "What Is The Right Hierarchy For Creating Part Of Page",
    "Answers": [
        "<h2> Then <p> Then <h1> Then <p> Then <h3> Then <p> Then <img>",
        "<h1> Then <p> Then <h3> Then <p> Then <h2> Then <p> Then <img>",
        "<h2> Then <p> Then <h3> Then <p> Then <h1> Then <p> Then <img>",
        "All Solutions Is Wrong"
    ],
    "CorrectAnswer": "All Solutions Is Wrong",
    "Degree": 10
},
{
    "Header": "How Can We Include External Page Inside Our HTML Page",
    "Answers": [
        "By Using Include in HTML",
        "By Using Load In HTML",
        "By Using iFrame Tag",
        "All Solutions Is Wrong"
    ],
    "CorrectAnswer": "By Using iFrame Tag",
    "Degree": 10
},
{
    "Header": "What Is The Tag That Not Exists in HTML",
    "Answers": [
        "<object>",
        "<basefont>",
        "<abbr>",
        "All Tags Is Exists in HTML"
    ],
    "CorrectAnswer": "All Tags Is Exists in HTML",
    "Degree": 10
},
{
    "Header": "How We Specify Document Type Of HTML5 Page",
    "Answers": [
        "<DOCTYPE html>",
        "<DOCTYPE html5>",
        "<!DOCTYPE html5>",
        "<!DOCTYPE html>"
    ],
    "CorrectAnswer": "<!DOCTYPE html>",
    "Degree": 10
},
{
    "Header": "What Is The Element Thats Not Exists in HTML5 Semantics",
    "Answers": [
        "<article>",
        "<section>",
        "<blockquote>",
        "<aside>"
    ],
    "CorrectAnswer": "<blockquote>",
    "Degree": 10
},
{
    "Header": "In HTML Can We Use This Way To Add Attributes",
    "Answers": [
        "<div class='class-name'>",
        "<div class=class-name>",
        "<div class=\"class-name\">",
        "All Is Right"
    ],
    "CorrectAnswer": "All Is Right",
    "Degree": 10
},
{
    "Header": "Which Standard value for charset meta tag",
    "Answers": [
        "UTF-6",
        "ISO-32",
        "UTF-8",
        "TMT-86"
    ],
    "CorrectAnswer": "UTF-6",
    "Degree": 10
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
  testClicked(){
    if (!this.scoreView) {
      this.secNum=0;
      this.test=true;
    }
    
  }
  form = new FormGroup({
    gender: new FormControl('', Validators.required)
  });
  score:number=0;
  scoreView:boolean=false;
  testSubmit(testForm:any){
    if (testForm.value.question1==this.questions[0].CorrectAnswer) {
      this.score++;
    }
    if (testForm.value.question2==this.questions[1].CorrectAnswer) {
      this.score++;
    }
    if (testForm.value.question3==this.questions[2].CorrectAnswer) {
      this.score++;
    }
    if (testForm.value.question4==this.questions[3].CorrectAnswer) {
      this.score++;
    }
    if (testForm.value.questio5==this.questions[4].CorrectAnswer) {
      this.score++;
    }
    if (testForm.value.question6==this.questions[5].CorrectAnswer) {
      this.score++;
    }
    if (testForm.value.question7==this.questions[6].CorrectAnswer) {
      this.score++;
    }
    if (testForm.value.question8==this.questions[7].CorrectAnswer) {
      this.score++;
    }
    if (testForm.value.question9==this.questions[8].CorrectAnswer) {
      this.score++;
    }
    if (testForm.value.question10==this.questions[9].CorrectAnswer) {
      this.score++;
    }
    this.test=false;
    this.scoreView=true;
    
  }
}
