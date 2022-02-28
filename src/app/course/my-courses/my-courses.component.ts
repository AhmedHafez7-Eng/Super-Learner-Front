import { Component, OnInit } from '@angular/core';
import { course } from 'src/app/models/course.model';

@Component({
  selector: 'app-my-courses',
  templateUrl: './my-courses.component.html',
  styleUrls: ['./my-courses.component.css']
})
export class MyCoursesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  cardContent: course[] = [
    {
      id: 1,
      title: 'php',
      desc: 'lorem lorem lorem',
      max_score: 50,
      instructor_id: 1,
      img: '../../../assets/images/blog_2.jpg'
    },
    {
      id: 2,
      title: 'laravel',
      desc: 'lorem lorem lorem',
      max_score: 50,
      instructor_id: 1,
      img: '../../../assets/images/blog_2.jpg'
    },
    {
      id: 3,
      title: 'angular',
      desc: 'lorem lorem lorem',
      max_score: 50,
      instructor_id: 1,
      img: '../../../assets/images/blog_2.jpg'
    },
    {
      id: 3,
      title: 'angular',
      desc: 'lorem lorem lorem',
      max_score: 50,
      instructor_id: 1,
      img: '../../../assets/images/blog_2.jpg'
    }
  ]

}
