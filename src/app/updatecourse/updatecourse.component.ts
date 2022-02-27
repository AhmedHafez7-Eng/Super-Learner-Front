import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InstructorserviceService } from '../service/instructorservice.service';

@Component({
  selector: 'app-updatecourse',
  templateUrl: './updatecourse.component.html',
  styleUrls: ['./updatecourse.component.css']
})
export class UpdatecourseComponent implements OnInit {

  constructor(private activeroute:ActivatedRoute,private instserve:InstructorserviceService) { }
 
  instructor_id:number=(this.activeroute.snapshot.params['id']) as number;
  selectedfile!:File
  ngOnInit(): void {
  }
  uploadimg(){
    const fd=new FormData();
    fd.append('course_img',this.selectedfile,this.selectedfile.name)
    
     //this.img={img_name:this.category.img}
      this.instserve.uploadimg(this.instructor_id,fd).subscribe((res)=>{
      
       console.log(event)
      })
  }
  selectedFile(e:any){this.selectedfile= <File> e.target.files[0]
    console.log(this.selectedfile)}
}
