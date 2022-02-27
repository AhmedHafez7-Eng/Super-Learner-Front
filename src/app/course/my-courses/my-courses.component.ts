import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-courses',
  templateUrl: './my-courses.component.html',
  styleUrls: ['./my-courses.component.css']
})
export class MyCoursesComponent implements OnInit {

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
