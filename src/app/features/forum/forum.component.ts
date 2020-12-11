import { Component, OnInit } from '@angular/core';
import { DiscussionService } from '@app/services/discussion.service';
import { ThreadService } from '@app/services/thread.service';
@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.scss'],
  providers: [DiscussionService,ThreadService]
})
export class ForumComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

}
