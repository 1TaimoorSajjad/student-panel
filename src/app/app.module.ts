import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EnrolledCoursesComponent } from './components/courses/enrolled-courses/enrolled-courses.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { ProfileComponent } from './components/profile/profile/profile.component';
import { EditProfileComponent } from './components/profile/edit-profile/edit-profile.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { QuizAttemptsComponent } from './components/quiz-attempts/quiz-attempts.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    DashboardComponent,
    DashboardComponent,
    EnrolledCoursesComponent,
    ReviewsComponent,
    ProfileComponent,
    EditProfileComponent,
    WishlistComponent,
    QuizAttemptsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule,
    ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
