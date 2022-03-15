import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../service/register.service';
import { instructor } from "../models/instructor.model";
import { Router } from '@angular/router';
import { InstructorserviceService } from '../service/instructorservice.service';
@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {
  pass="";
  passConf=""
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  passPattern='(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}';
  log(x:any){
    this.pass=x.value;
  }
  log1(x:any){
    this.passConf=x.value;
  }
  instructor=new instructor();
  role!:string
  tokenfromregist!:string
  profile_pic!:any

img!:any
selectedfile!:File
id?:any

  constructor(private instserve:InstructorserviceService,private registserve:RegisterService,private activeroute:Router) { }

  ngOnInit(): void {
    
  }
  insertData(){
   
    this.instructor.profile_pic=this.selectedfile
    console.log(this.instructor)
    this.registserve.saveData(this.instructor).
    subscribe((res)=>{console.log(res);
     // this.tokenfromregist=(res.access_token)
    this.id=res.id
    console.log(this.id)
    this.uploadimg()
    })
      this.activeroute.navigate(['/login']);
  }
  uploadimg(){
    const fd=new FormData();
    fd.append('course_img',this.selectedfile,this.selectedfile.name)

     //this.img={img_name:this.category.img}
      this.registserve.uploadimg(this.id,fd).subscribe((res)=>{
       console.log(event)
      })
  }
  selectedFile(event:any){
    this.selectedfile= <File> event.target.files[0]
   console.log(this.selectedfile)
  }
  

}
