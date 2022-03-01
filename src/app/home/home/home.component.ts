import { Component, OnInit, AfterViewInit } from '@angular/core';
declare var timeline:any;
// var myapp = angular.module('myapp', ['angular-timeline']);


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit  {
  constructor() { }

  ngOnInit(): void {
//      timeline(document.querySelectorAll('.timeline'), {
//     forceVerticalMode: 700,
//     mode: 'horizontal',
//     verticalStartPosition: 'left',
//     visibleItems: 4
// });
  timeline(document.querySelectorAll('.timeline'), {
    forceVerticalMode: 700,
    mode: 'horizontal',
    verticalStartPosition: 'left',
    visibleItems: 4
});
  }




}
