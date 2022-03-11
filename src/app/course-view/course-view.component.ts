import { Component, Input, OnInit } from '@angular/core';
import { course } from '../models/course.model';

@Component({
  selector: 'app-course-view',
  templateUrl: './course-view.component.html',
  styleUrls: ['./course-view.component.css']
})

export class CourseViewComponent implements OnInit {
  @Input()
  course!:course;
  constructor() { }
  
  ngOnInit(): void {
    
  }
  
  
role='Instructor';
}
