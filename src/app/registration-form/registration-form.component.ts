import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../service/register.service';
import { instructor } from "../models/instructor.model";
import { Router } from '@angular/router';
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
  constructor(private registserve:RegisterService,private activeroute:Router) { }

  ngOnInit(): void {
    
  }
  insertData(){
   
    this.instructor.profile_pic=this.selectedfile
    console.log(this.instructor)
    this.registserve.saveData(this.instructor).
    subscribe(res=>{console.log(res);
      this.tokenfromregist=(res.access_token)})
      this.activeroute.navigate(['/login']);
  }
  uploadimg(){
    const fd=new FormData();
    fd.append('profile_pic',this.selectedfile,this.selectedfile.name)
    
    
      this.registserve.uploadimg(1,fd).subscribe((res)=>{
     
       console.log(fd)
      })
  }
  selectedFile(event:any){
    this.selectedfile= <File> event.target.files[0]
   console.log(this.selectedfile)
  }
  

}
