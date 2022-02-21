import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseCardComponent } from './course/course-card/course-card.component';
import { FirstSectionComponent } from './course/first-section/first-section.component';
import { LastSectionComponent } from './course/last-section/last-section.component';
import { HomeComponent } from './home/home/home.component';


const routes: Routes = [
//  {path: '', redirectTo: '/home', pathMatch: 'full' },
//  {path: 'home', component: HomeComponent, outlet: "home" },

  { path: 'home', component: HomeComponent,
    children: [] 
  } ,
   { path: 'course', component: CourseCardComponent,
    children: [
      { path: 'course', component: CourseCardComponent},
      { path: 'course', component: FirstSectionComponent},
      { path: 'course', component: LastSectionComponent }
    ] 
  }    
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule { }
