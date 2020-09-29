import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NotificationService } from '@app/core/services/notification.service';
import { LatestCoursesComponent } from './latest-courses/latest-courses.component';
import { NewsComponent } from './news/news.component';
import { ProgressViewComponent } from './progress-view/progress-view.component';
import { TrackNavigatorComponent } from './track-navigator/track-navigator.component';
import { ForumNavigatorComponent } from './forum-navigator/forum-navigator.component';
import { SharedModule } from '@app/shared/shared.module';
import { MaterialModule } from '@app/shared/material.module';


@NgModule({
  declarations: [HomeComponent, LatestCoursesComponent, NewsComponent, ProgressViewComponent, TrackNavigatorComponent, ForumNavigatorComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    MaterialModule
  ]
})
export class HomeModule { }
