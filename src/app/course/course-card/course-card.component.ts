import { Component, Input, OnInit } from '@angular/core';
import { course } from 'src/app/models/course.model';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {
@Input()
coursesfrompare!:course

  constructor() { }

  ngOnInit(): void {
  }
cardContent=[
  {img:'../../../assets/images/blog_2.jpg',name:'Hotel Management',
  desc:'Lorem ipsum door sit amet, fugiat deicata avise id cum, no quomaiorum intel ogrets geuiat operts elicata libere avisse idcumlegebat, liber regione eu si',
rate:4},
 {img:'../../../assets/images/blog_2.jpg',name:'Engineering',
  desc:'Lorem ipsum door sit amet, fugiat deicata avise id cum, no quomaiorum intel ogrets geuiat operts elicata libere avisse idcumlegebat, liber regione eu si',
rate:4},
 {img:'../../../assets/images/blog_2.jpg',name:'programming',
  desc:'Lorem ipsum door sit amet, fugiat deicata avise id cum, no quomaiorum intel ogrets geuiat operts elicata libere avisse idcumlegebat, liber regione eu si',
rate:4}
]
}
