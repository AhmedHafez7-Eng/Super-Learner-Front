import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loggedout',
  templateUrl: './loggedout.component.html',
  styleUrls: ['./loggedout.component.css']
})
export class LoggedoutComponent implements OnInit {

  constructor(private activeroute:Router) { }

  ngOnInit(): void {
    this.activeroute.navigate(['/login'])
  }

}
