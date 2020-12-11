import { Component, OnInit } from '@angular/core';
import { NotificationEnum } from '@app/core/enums/notification.enum';
import { NotificationService } from '@app/core/services/notification.service';
import { DiscussionGroup } from '@app/models/discussion-group.model';
import { DiscussionService } from '@app/services/discussion.service';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss']
})
export class GeneralComponent implements OnInit {
  threadSections: DiscussionGroup[];
  constructor(
    private discussionService: DiscussionService,
    private notification: NotificationService
  ) { }

  ngOnInit(): void {
    this.discussionService.getAll().subscribe(
      data => {
        this.threadSections = data;
      },
      error => {
        this.notification.notify(error,NotificationEnum.Error);
      }
    )
  }

}
