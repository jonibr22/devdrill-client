import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseDetailRoutingModule } from './course-detail-routing.module';
import { CourseDetailComponent } from './course-detail.component';
import { OverviewComponent } from './overview/overview.component';
import { ChapterComponent } from './chapter/chapter.component';
import { SharedModule } from '@app/shared/shared.module';


@NgModule({
  declarations: [CourseDetailComponent, OverviewComponent, ChapterComponent],
  imports: [
    CommonModule,
    CourseDetailRoutingModule,
    SharedModule
  ]
})
export class CourseDetailModule { }
