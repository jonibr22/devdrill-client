import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NotificationEnum } from '@app/core/enums/notification.enum';
import { NotificationService } from '@app/core/services/notification.service';
import { Track } from '@app/models/track.model';
import { CourseService } from '@app/services/course.service';
import { TrackService } from '@app/services/track.service';

@Component({
  selector: 'app-track-detail',
  templateUrl: './track-detail.component.html',
  styleUrls: ['./track-detail.component.scss']
})
export class TrackDetailComponent implements OnInit {
  trackId: number;
  constructor(
    private activatedRoute : ActivatedRoute
  ) { }
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => { 
      this.trackId = +params.get('id');
    });
  }

}
