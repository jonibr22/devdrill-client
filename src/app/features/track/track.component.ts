import { Component, OnInit } from '@angular/core';
import { NotificationEnum } from '@app/core/enums/notification.enum';
import { NotificationService } from '@app/core/services/notification.service';
import { TrackGroup } from '@app/models/track-group.model';
import { TrackService } from '@app/services/track.service';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.scss']
})
export class TrackComponent implements OnInit {
  categoryTracks: TrackGroup[];
  constructor(
    private trackService: TrackService,
    private notification: NotificationService
  ) { }

  ngOnInit(): void {
    this.trackService.getAll().subscribe(
      data => {
          this.categoryTracks = data;
      },
      error => {
          this.notification.notify(error,NotificationEnum.Error);
      });
  }

}
