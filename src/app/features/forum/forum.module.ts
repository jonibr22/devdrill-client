import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForumRoutingModule } from './forum-routing.module';
import { ForumComponent } from './forum.component';
import { SharedModule } from '@app/shared/shared.module';
import { MaterialModule } from '@app/shared/material.module';
import { ThreadsComponent } from './threads/threads.component';
import { DetailThreadComponent } from './detail-thread/detail-thread.component';


@NgModule({
  declarations: [ForumComponent, ThreadsComponent, DetailThreadComponent],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    ForumRoutingModule
  ]
})
export class ForumModule { }
