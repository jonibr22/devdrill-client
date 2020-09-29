import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrackRoutingModule } from './track-routing.module';
import { SharedModule } from '@app/shared/shared.module';
import { TrackComponent } from './track.component';
import { MaterialModule } from '@app/shared/material.module';


@NgModule({
  declarations: [
    TrackComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    TrackRoutingModule
  ]
  
})
export class TrackModule { }
