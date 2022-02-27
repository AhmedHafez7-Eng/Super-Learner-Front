
import { Component, OnInit,HostListener } from '@angular/core';

@Component({
  selector: 'app-course-content',
  templateUrl: './course-content.component.html',
  styleUrls: ['./course-content.component.css']
})
export class CourseContentComponent implements OnInit {
  height:number=72;
  constructor() { }
  
  ngOnInit(): void {
  }
  @HostListener("window:scroll", []) 
  onWindowScroll(side:any){
    var scroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      if(scroll<72){
        if(this.height>0){
          this.height--;
          
        }
        else{
          if (scroll<72) {
            this.height+=scroll;
            
          }
          if (scroll=72) {
            this.height=scroll;
            
          }
        }
      }
      else{
        this.height=0;
      }
      
    
  }
}
