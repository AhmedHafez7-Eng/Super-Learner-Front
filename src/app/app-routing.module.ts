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


const routes: Routes = [
 {path: '', redirectTo: '/home', pathMatch: 'full' },
//  {path: 'home', component: HomeComponent, outlet: "home" },

  { path: 'home', component: HomeComponent,outlet: "home" ,
    children: [] 
  } , 
  // { path: 'course', component: CourseCardComponent,
  //   children: [
  //     { path: 'course', component: CourseCardComponent },
  //     { path: 'course', component: FirstSectionComponent },
  //     { path: 'course', component: LastSectionComponent },
  //   ] 
  // },
  //   { path: 'aboutUs', component: AboutFirstSecComponent,
  //   children: [
  //     { path: 'aboutUs', component: AboutFirstSecComponent },
  //     { path: 'aboutUs', component: AboutsecSecComponent },
  //     { path: 'aboutUs', component: AboutThirdSecComponent },
  //     { path: 'aboutUs', component: AboutFourthSecComponent },
  //   ] 
  // } ,
  
  //   { path: 'teachers', component: CardContainerComponent,
  //   children: [
  //     { path: 'teachers', component: InstructorCardComponent },
  //     { path: 'teachers', component: CardContainerComponent },
  //   ] 
  // } 
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule { }
