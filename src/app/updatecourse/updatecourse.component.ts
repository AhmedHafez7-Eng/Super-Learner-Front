import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InstructorserviceService } from '../service/instructorservice.service';
import { course } from '../models/course.model';
@Component({
  selector: 'app-updatecourse',
  templateUrl: './updatecourse.component.html',
  styleUrls: ['./updatecourse.component.css']
})
export class UpdatecourseComponent implements OnInit {

  constructor(private activeroute:ActivatedRoute,private instserve:InstructorserviceService) { }
 
  course_id:number=(this.activeroute.snapshot.params['id']) as number;
  selectedfile!:File
  course= new course()
  ngOnInit(): void {
  }
  uploadimg(){
    const fd=new FormData();
    fd.append('course_img',this.selectedfile,this.selectedfile.name)
    
     //this.img={img_name:this.category.img}
      this.instserve.uploadimg(this.course_id,fd).subscribe((res)=>{
      
       console.log(event)
      })
  }
  selectedFile(e:any){this.selectedfile= <File> e.target.files[0]
    console.log(this.selectedfile)}
    //////////////////////////////////////
    updateData(){
      
      
    this.instserve.update(this.course,this.course_id).subscribe(
     (res)=>{console.log('hi')
        
     })
   
     }
}
