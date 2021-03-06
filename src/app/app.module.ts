import { NgModule } from '@angular/core';
// import { NgImageSliderModule } from 'ng-image-slider';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InstructorCardComponent } from './Instructor/instructor-card/instructor-card.component';
import { CardContainerComponent } from './Instructor/card-container/card-container.component';
import { FirstSectionComponent } from './course/first-section/first-section.component';
import { CourseCardComponent } from './course/course-card/course-card.component';
import { LastSectionComponent } from './course/last-section/last-section.component';
import { HomeComponent } from './home/home/home.component';
import { AboutFirstSecComponent } from './aboutUS/about-first-sec/about-first-sec.component';
import { AboutsecSecComponent } from './aboutUS/aboutsec-sec/aboutsec-sec.component';
import { AboutThirdSecComponent } from './aboutUS/about-third-sec/about-third-sec.component';
import { AboutFourthSecComponent } from './aboutUS/about-fourth-sec/about-fourth-sec.component';
import { RouterModule, ROUTES } from '@angular/router';
import { FooterComponent } from './layouts/footer/footer.component';
import { HeaderComponent } from './layouts/header/header.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { InstructorListComponent } from './instructor-list/instructor-list.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InstructorsComponent } from './instructors/instructors.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { CourseInfoComponent } from './course-info/course-info.component';
import { UpdatecourseComponent } from './updatecourse/updatecourse.component';
import { MyCoursesComponent } from './course/my-courses/my-courses.component';
import { CoursesComponent } from './course/courses/courses.component';
import { CourseViewComponent } from './course-view/course-view.component';
import { CourseContentComponent } from './course-content/course-content.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { LoggedoutComponent } from './loggedout/loggedout.component';
import { SecureComponent } from './secure/secure.component';
import { AdminHeaderComponent } from './admin/admin-header/admin-header.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { AdminFooterComponent } from './admin/admin-footer/admin-footer.component';
import { AdminSidebarComponent } from './admin/admin-sidebar/admin-sidebar.component';
import { AdminMainContentComponent } from './admin/admin-main-content/admin-main-content.component';
import { StudentsComponent } from './admin/students/students.component';
import { AdminCoursesComponent } from './admin/admin-courses/admin-courses.component';
import { AdminInstructorsComponent } from './admin/admin-instructors/admin-instructors.component';
import { AddcourseComponent } from './addcourse/addcourse.component';
import { CreateTestComponent } from './create-test/create-test.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { ProfileComponent } from './profile/profile.component';
import { FeedBackFormComponent } from './feed-back-form/feed-back-form.component';

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
    LoggedoutComponent,
    SecureComponent,
    AdminHeaderComponent,
    AdminDashboardComponent,
    AdminFooterComponent,
    AdminSidebarComponent,
    AdminMainContentComponent,
    StudentsComponent,
    AdminCoursesComponent,
    AdminInstructorsComponent,
    AddcourseComponent,
    CreateTestComponent,
    CreatePostComponent,
    ProfileComponent,
    FeedBackFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbCarouselModule,
    // NgImageSliderModule,
    // instructor
    //  MatFormFieldModule,
    // MatDatepickerModule,
    // MatInputModule,
    // MatNativeDateModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
