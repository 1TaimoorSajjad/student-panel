import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EnrolledCoursesComponent } from './components/courses/enrolled-courses/enrolled-courses.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { ProfileComponent } from './components/profile/profile/profile.component';
import { EditProfileComponent } from './components/profile/edit-profile/edit-profile.component';

const routes: Routes = [
  //Dashboard
  { path: '', component: DashboardComponent },
  { path: 'dashboard', component: DashboardComponent },

  //courses
  { path: 'courses', component: EnrolledCoursesComponent },

  //reviews
  { path: 'reviews', component: ReviewsComponent },

  //profile
  { path: 'profile', component: ProfileComponent },
  { path: 'profile/edit', component: EditProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }