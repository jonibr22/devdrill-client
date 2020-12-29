import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '@app/core/services/authentication.service';
import { DiscussionService } from '@app/services/discussion.service';
import { ReplyService } from '@app/services/reply.service';
import { ThreadService } from '@app/services/thread.service';
@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.scss'],
  providers: [DiscussionService,ThreadService,ReplyService]
})
export class ForumComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

}
