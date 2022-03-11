import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InstructorCardComponent } from './Instructor/instructor-card/instructor-card.component';
import { CardContainerComponent } from './Instructor/card-container/card-container.component';
import { FirstSectionComponent } from './course/first-section/first-section.component';
import { CourseCardComponent } from './course/course-card/course-card.component';
import { LastSectionComponent } from './course/last-section/last-section.component';
import { HomeComponent } from './home/home/home.component';
import {AboutFirstSecComponent} from './aboutUS/about-first-sec/about-first-sec.component';
import { AboutsecSecComponent } from './aboutUS/aboutsec-sec/aboutsec-sec.component';
import { AboutThirdSecComponent } from './aboutUS/about-third-sec/about-third-sec.component';
import { AboutFourthSecComponent } from './aboutUS/about-fourth-sec/about-fourth-sec.component';
import { RouterModule, ROUTES } from '@angular/router';
import {FooterComponent} from './layouts/footer/footer.component'
import {HeaderComponent} from './layouts/header/header.component'
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { InstructorListComponent } from './instructor-list/instructor-list.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InstructorsComponent } from './instructors/instructors.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from "@angular/common/http";
import { CourseInfoComponent } from './course-info/course-info.component';
import { UpdatecourseComponent } from './updatecourse/updatecourse.component';
import { MyCoursesComponent } from './course/my-courses/my-courses.component';
import { CoursesComponent } from './course/courses/courses.component';
import { CourseViewComponent } from './course-view/course-view.component';
import { CourseContentComponent } from './course-content/course-content.component';
import { LoginFormComponent } from './login-form/login-form.component';
import {ProfileComponent} from './profile/profile/profile.component'


@NgModule({
  declarations: [
    AppComponent,
    InstructorCardComponent,
    CardContainerComponent,
    HeaderComponent,
    FirstSectionComponent,
    CourseCardComponent,
    LastSectionComponent,
    FooterComponent,
    HomeComponent,
    AboutFirstSecComponent,
    AboutsecSecComponent,
    AboutThirdSecComponent,
    AboutFourthSecComponent,
    TestimonialsComponent,
    InstructorListComponent,
    RegistrationFormComponent,
    InstructorsComponent,
    RegisterComponent,
    CourseInfoComponent,
    UpdatecourseComponent,
    MyCoursesComponent,
    CoursesComponent,
    CourseViewComponent,
    CourseContentComponent,
    LoginFormComponent,
ProfileComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule
    // instructor
    //  MatFormFieldModule,
    // MatDatepickerModule,
    // MatInputModule,
    // MatNativeDateModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
