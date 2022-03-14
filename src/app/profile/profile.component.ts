import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { instructor } from '../models/instructor.model';
import { RegisterService } from '../service/register.service';
import { UserService } from '../service/user.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  mess: any;
  constructor(
    private registserve: RegisterService,
    private activeroute: Router,
    private _userSer: UserService,
    private activeroute2: ActivatedRoute
  ) {}
  pass = '';
  passConf = '';
  ReturnData!: any;
  user = new instructor();
  userId: number = this.activeroute2.snapshot.params['id'] as number;

  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$';
  passPattern =
    '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,}';
  log(x: any) {
    this.pass = x.value;
  }
  log1(x: any) {
    this.passConf = x.value;
  }
  instructor = new instructor();
  role!: string;
  tokenfromregist!: string;
  profile_pic!: any;

  img!: any;
  selectedfile!: File;

  ngOnInit(): void {
    this._userSer.userlogin().subscribe((res) => {
      this.ReturnData = res;
    });
  }
  update() {
    this._userSer.updateData(this.user, this.userId).subscribe((res) => {
      this.mess = res;
      // data = res;
      // console.log(data);

      this.activeroute.navigate(['/home']);
    });
  }

  uploadimg() {
    const fd = new FormData();
    fd.append('profile_pic', this.selectedfile, this.selectedfile.name);

    this.registserve.uploadimg(1, fd).subscribe((res) => {});
  }
  selectedFile(event: any) {
    this.selectedfile = <File>event.target.files[0];
  }
}
