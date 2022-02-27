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
// import { MatFormFieldModule } from '@angular/material/form-field';
// import {MatDatepickerModule} from '@angular/material/datepicker';
// import {MatNativeDateModule} from '@angular/material/core';
// import{MatInputModule }from '@angular/material/input'
import { FormsModule } from '@angular/forms';
import { InstructorsComponent } from './instructors/instructors.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from "@angular/common/http";
import { CourseInfoComponent } from './course-info/course-info.component';
// import { instructor } from "./models/instructor.model";

@NgModule({
  declarations: [
    AppComponent,
    InstructorCardComponent,
    CardContainerComponent,
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
    HeaderComponent,
     
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
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
