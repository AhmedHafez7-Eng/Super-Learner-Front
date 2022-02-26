import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseInfoComponent } from './course-info/course-info.component';
import { InstructorsComponent } from './instructors/instructors.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: 'teachers', component: InstructorsComponent },
  { path: 'register', component: RegisterComponent },
  {path:'courseInfo/:id',component:CourseInfoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
