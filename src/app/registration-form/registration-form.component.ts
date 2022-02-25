import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../service/register.service';
import { instructor } from '../models/instructor.model';
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
  tokenfromregist!:string
  constructor(private registserve:RegisterService) { }

  ngOnInit(): void {
    
  }
  insertData(){
    this.registserve.saveData(this.instructor).
    subscribe(res=>{this.tokenfromregist=(res.access_token)})
  }

}
