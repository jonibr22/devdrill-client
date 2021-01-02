import { Component, OnInit } from '@angular/core';
import { NotificationEnum } from '@app/core/enums/notification.enum';
import { NotificationService } from '@app/core/services/notification.service';
import { DiscussionGroup } from '@app/models/discussion-group.model';
import { Thread } from '@app/models/thread.model';
import { DiscussionService } from '@app/services/discussion.service';
import { ReplyService } from '@app/services/reply.service';
import { ThreadService } from '@app/services/thread.service';
import { Observable } from 'rxjs';

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
  countThreads(threads: Thread[]){
    if(threads){
      return threads.length;
    }
    return 0;
  }
  countReplies(threads: Thread[]){
    if(threads){
      return threads.reduce(function (acc, curr) {
        return acc + curr.replyCount;
      },0);
    }
    return 0;
  }
}
