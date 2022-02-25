import { Component, Input, OnInit } from '@angular/core';
import { instructor } from '../models/instructor.model';

@Component({
  selector: 'app-instructor-card',
  templateUrl: './instructor-card.component.html',
  styleUrls: ['./instructor-card.component.css']
})
export class InstructorCardComponent implements OnInit {
@Input()
instructorData!:instructor
  constructor() { }

  ngOnInit(): void {
  }

}
