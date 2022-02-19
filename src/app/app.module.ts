import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InstructorCardComponent } from './instructor-card/instructor-card.component';
import { CardContainerComponent } from './card-container/card-container.component';
import { HeaderComponent } from './layout/header/header.component';
import { FirstSectionComponent } from './course/first-section/first-section.component';
import { CourseCardComponent } from './course/course-card/course-card.component';
import { LastSectionComponent } from './course/last-section/last-section.component';
import { FooterComponent } from './layout/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    InstructorCardComponent,
    CardContainerComponent,
    HeaderComponent,
    FirstSectionComponent,
    CourseCardComponent,
    LastSectionComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
