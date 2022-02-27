import { Component, Input, OnInit } from '@angular/core';
import { course } from '../../models/course.model';
import { instructor } from '../../models/instructor.model';

@Component({
  selector: 'app-instructor-card',
  templateUrl: './instructor-card.component.html',
  styleUrls: ['./instructor-card.component.css']
})
export class InstructorCardComponent implements OnInit {
@Input()
courseData!:course
instructorData!:instructor
  constructor() { }

  ngOnInit(): void {
  }

}
