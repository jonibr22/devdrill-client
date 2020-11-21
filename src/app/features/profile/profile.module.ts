import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { SharedModule } from '@app/shared/shared.module';
import { MaterialModule } from '@app/shared/material.module';
import { TrackComponent } from './track/track.component';
import { CoursesComponent } from './courses/courses.component';
import { ThreadsComponent } from './threads/threads.component';


@NgModule({
  declarations: [ProfileComponent, TrackComponent, CoursesComponent, ThreadsComponent],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    ProfileRoutingModule
  ]
})
export class ProfileModule { }
