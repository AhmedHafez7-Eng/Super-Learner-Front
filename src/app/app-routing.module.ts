import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutFirstSecComponent } from './aboutUS/about-first-sec/about-first-sec.component';
import { AboutFourthSecComponent } from './aboutUS/about-fourth-sec/about-fourth-sec.component';
import { AboutThirdSecComponent } from './aboutUS/about-third-sec/about-third-sec.component';
import { AboutsecSecComponent } from './aboutUS/aboutsec-sec/aboutsec-sec.component';
import { CourseCardComponent } from './course/course-card/course-card.component';
import { FirstSectionComponent } from './course/first-section/first-section.component';
import { LastSectionComponent } from './course/last-section/last-section.component';
import { HomeComponent } from './home/home/home.component';
import { CardContainerComponent } from './Instructor/card-container/card-container.component';
import { InstructorCardComponent } from './Instructor/instructor-card/instructor-card.component';
import { CourseInfoComponent } from './course-info/course-info.component';
import { InstructorsComponent } from './instructors/instructors.component';
import { LoginFormComponent } from './login-form/login-form.component';

import { RegisterComponent } from './register/register.component';
import { AuthService } from './service/guard/auth.service';
import { UpdatecourseComponent } from './updatecourse/updatecourse.component';
import { MyCoursesComponent } from './course/my-courses/my-courses.component';
import { CoursesComponent } from './course/courses/courses.component';
import { CourseContentComponent } from './course-content/course-content.component';
import { LoggedoutComponent } from './loggedout/loggedout.component';
import { HeaderComponent } from './layouts/header/header.component';
import { SecureComponent } from './secure/secure.component';
import { InstructorAccountComponent } from './instructor-account/instructor-account.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { StudentsComponent } from './admin/students/students.component';
import { AdminInstructorsComponent } from './admin/admin-instructors/admin-instructors.component';
import { AdminCoursesComponent } from './admin/admin-courses/admin-courses.component';
import { AddcourseComponent } from './addcourse/addcourse.component';
import { AdminService } from './service/admin.service';

//import { LoginFormComponent } from './login-form/login-form.component';



const routes: Routes = [
  { path: 'admin/dashboard', component: AdminDashboardComponent,canActivate:[AuthService,AdminService] },
  { path: 'admin/students', component: StudentsComponent,canActivate:[AuthService] },
  { path: 'admin/instructors', component: AdminInstructorsComponent,canActivate:[AuthService]},
  { path: 'admin/courses', component: AdminCoursesComponent,canActivate:[AuthService] },
  { path: 'instructor-account', component: InstructorAccountComponent },
  { path: 'teachers', component: InstructorsComponent },
  { path: 'course-content/:id', component: CourseContentComponent },
 // { path: 'update', component: UpdatecourseComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginFormComponent },
  { path: 'loggedout', component: LoggedoutComponent },
  {path:'secure',component:SecureComponent},
  {path:'addcourse/:id',component:AddcourseComponent},

  {path:'courseInfo/:id',component:CourseInfoComponent
  ,canActivate:[AuthService]},
  {path:'update/:id',component:UpdatecourseComponent},
  { path: 'course', component: CoursesComponent,canActivate:[AuthService]},
  {path:'my-courses/:id',component: MyCoursesComponent,canActivate:[AuthService]},
    { path: 'home', component: HomeComponent},

    { path: 'aboutUs', component: AboutFirstSecComponent,
    children: [
      { path: 'aboutUs', component: AboutFirstSecComponent },
      { path: 'aboutUs', component: AboutsecSecComponent },
      { path: 'aboutUs', component: AboutThirdSecComponent },
      { path: 'aboutUs', component: AboutFourthSecComponent },
    ]
  } ,

  //   { path: 'teachers', component: CardContainerComponent,
  //   children: [
  //     { path: 'teachers', component: InstructorCardComponent },
  //     { path: 'teachers', component: CardContainerComponent },
  //   ]
  // }

    { path: 'teachers', component: InstructorsComponent,
    children: [
      { path: 'teachers', component: InstructorCardComponent },
      { path: 'teachers', component: CardContainerComponent },
    ]
  }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule { }
