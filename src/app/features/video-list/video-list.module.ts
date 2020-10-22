import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideoListRoutingModule } from './video-list-routing.module';
import { VideoListComponent } from './video-list.component';
import { VgCoreModule,VgControlsModule,VgBufferingModule, VgOverlayPlayModule } from 'ngx-videogular';
import { PlaylistComponent } from './playlist/playlist.component';
import { PlayingComponent } from './playing/playing.component'
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
  declarations: [VideoListComponent, PlaylistComponent, PlayingComponent],
  imports: [
    SharedModule,
    CommonModule,
    VideoListRoutingModule,
    VgCoreModule,
    VgControlsModule,
    VgBufferingModule,
    VgOverlayPlayModule
  ]
})
export class VideoListModule { }
