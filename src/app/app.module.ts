import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InstructorCardComponent } from './Instructor/instructor-card/instructor-card.component';
import { CardContainerComponent } from './Instructor/card-container/card-container.component';
import { HeaderComponent } from './layout/header/header.component';
import { FirstSectionComponent } from './course/first-section/first-section.component';
import { CourseCardComponent } from './course/course-card/course-card.component';
import { LastSectionComponent } from './course/last-section/last-section.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './home/home/home.component';
import {AboutFirstSecComponent} from './aboutUS/about-first-sec/about-first-sec.component';
import { AboutsecSecComponent } from './aboutUS/aboutsec-sec/aboutsec-sec.component';
import { AboutThirdSecComponent } from './aboutUS/about-third-sec/about-third-sec.component';
import { AboutFourthSecComponent } from './aboutUS/about-fourth-sec/about-fourth-sec.component';
import { RouterModule, ROUTES } from '@angular/router';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
      RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
