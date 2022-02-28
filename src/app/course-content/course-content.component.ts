
import { Component, OnInit, HostListener } from '@angular/core';
import { section } from '../models/section.model';
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
  role='Instructor';
  secNum:number=1;
  section1Clicked(){
    this.secNum=1;
  }
  section2Clicked(){
    this.secNum=2;
  }
  section3Clicked(){
    this.secNum=3;
  }
  section4Clicked(){
    this.secNum=4;
  }
  section5Clicked(){
    this.secNum=5;
  }
  
}
