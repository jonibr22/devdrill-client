import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseRoutingModule } from './course-routing.module';
import { CourseComponent } from './course.component';
import { SharedModule } from '@app/shared/shared.module';
import { CourseListComponent } from './course-list/course-list.component';
import { SearchPanelComponent } from './search-panel/search-panel.component';


@NgModule({
  declarations: [CourseComponent, CourseListComponent, SearchPanelComponent],
  imports: [
    SharedModule,
    CommonModule,
    CourseRoutingModule
  ]
})
export class CourseModule { }
