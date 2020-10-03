import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
