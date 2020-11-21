import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotfoundComponent } from './core/components/page-notfound/page-notfound.component';
import { AuthGuard } from './core/guards/auth.guard';
import { AuthComponent } from './features/auth/auth.component';
import { AuthModule } from './features/auth/auth.module';
import { HomeComponent } from './features/home/home.component';
import { HomeModule } from './features/home/home.module';
import { TrackComponent } from './features/track/track.component';


const routes: Routes = [
  {path: 'auth', loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule)},
  {path: 'home', loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule), canActivate: [AuthGuard]},
  {path: 'track', loadChildren: () => import('./features/track/track.module').then(m => m.TrackModule), canActivate: [AuthGuard]},
  {path: 'course', loadChildren: () => import('./features/course/course.module').then(m => m.CourseModule), canActivate: [AuthGuard]},
  {path: 'coursedetail', loadChildren: () => import('./features/course-detail/course-detail.module').then(m => m.CourseDetailModule), canActivate: [AuthGuard]},
  {path: 'trackdetail', loadChildren: () => import('./features/track-detail/track-detail.module').then(m => m.TrackDetailModule), canActivate: [AuthGuard]},
  {path: 'videolist', loadChildren: () => import('./features/video-list/video-list.module').then(m => m.VideoListModule), canActivate: [AuthGuard]},
  {path: 'forum', loadChildren: () => import('./features/forum/forum.module').then(m => m.ForumModule), canActivate: [AuthGuard]},
  {path: 'profile', loadChildren: () => import('./features/profile/profile.module').then(m => m.ProfileModule), canActivate: [AuthGuard]},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: PageNotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
