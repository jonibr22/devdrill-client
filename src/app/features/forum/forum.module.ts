import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForumRoutingModule } from './forum-routing.module';
import { ForumComponent } from './forum.component';
import { SharedModule } from '@app/shared/shared.module';
import { MaterialModule } from '@app/shared/material.module';
import { ThreadsComponent } from './threads/threads.component';
import { DetailThreadComponent } from './detail-thread/detail-thread.component';
import { GeneralComponent } from './general/general.component';
import { DateAgoPipe } from '@app/pipes/date-ago.pipe';
import { BelowThousandPipe } from '@app/pipes/below-thousand.pipe';
import { ReplyFormComponent } from './detail-thread/dialogs/reply-form/reply-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DeleteConfirmComponent } from './detail-thread/dialogs/delete-confirm/delete-confirm.component';
import { ThreadFormComponent } from './detail-thread/dialogs/thread-form/thread-form.component';


@NgModule({
  declarations: [ForumComponent, ThreadsComponent, DetailThreadComponent, GeneralComponent, DateAgoPipe, BelowThousandPipe, ReplyFormComponent, DeleteConfirmComponent, ThreadFormComponent],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    ForumRoutingModule,
    ReactiveFormsModule
  ]
})
export class ForumModule { }
