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
import { RegisterComponent } from './register/register.component';
import { UpdatecourseComponent } from './updatecourse/updatecourse.component';
import { MyCoursesComponent } from './course/my-courses/my-courses.component';
import { CoursesComponent } from './course/courses/courses.component';



const routes: Routes = [
    { path: 'teachers', component: InstructorsComponent },
  { path: 'register', component: RegisterComponent },
  {path:'courseInfo/:id',component:CourseInfoComponent},
  {path:'update/:id',component:UpdatecourseComponent},
  { path: 'course', component: CourseCardComponent,
    children: [
      { path: 'course', component: CourseCardComponent },
      { path: 'course', component: FirstSectionComponent },
      { path: 'course', component: LastSectionComponent },
    ] 
  },
  {path:'my-courses',component: MyCoursesComponent},
    { path: 'home', component: HomeComponent,outlet: "home" },
  
    { path: 'aboutUs', component: AboutFirstSecComponent,
    children: [
      { path: 'aboutUs', component: AboutFirstSecComponent },
      { path: 'aboutUs', component: AboutsecSecComponent },
      { path: 'aboutUs', component: AboutThirdSecComponent },
      { path: 'aboutUs', component: AboutFourthSecComponent },
    ] 
  } ,
  
    { path: 'teachers', component: CardContainerComponent,
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
