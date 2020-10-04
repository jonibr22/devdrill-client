import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrackDetailRoutingModule } from './track-detail-routing.module';
import { TrackDetailComponent } from './track-detail.component';
import { SharedModule } from '@app/shared/shared.module';
import { OverviewComponent } from './overview/overview.component';
import { RelatedCourseComponent } from './related-course/related-course.component';


@NgModule({
  declarations: [TrackDetailComponent, OverviewComponent, RelatedCourseComponent],
  imports: [
    CommonModule,
    TrackDetailRoutingModule,
    SharedModule
  ]
})
export class TrackDetailModule { }
