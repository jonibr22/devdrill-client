import { Component, Input, OnInit } from '@angular/core';
import { NotificationEnum } from '@app/core/enums/notification.enum';
import { NotificationService } from '@app/core/services/notification.service';
import { Track } from '@app/models/track.model';
import { TrackService } from '@app/services/track.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  @Input() trackId;
  track: Track;
  constructor(
    private trackService: TrackService,
    private notification: NotificationService
  ) { }

  ngOnInit(): void {
    this.trackService.getById(this.trackId).subscribe(
      data => {
          this.track = data;
      },
      error => {
          this.notification.notify(error,NotificationEnum.Error);
      }
    );
  }

}
