import { AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table'
import { ActivatedRoute } from '@angular/router';
import { NotificationEnum } from '@app/core/enums/notification.enum';
import { NotificationService } from '@app/core/services/notification.service';
import { Discussion } from '@app/models/discussion.model';
import { Thread } from '@app/models/thread.model';
import { DiscussionService } from '@app/services/discussion.service';
import { ThreadService } from '@app/services/thread.service';

@Component({
  selector: 'app-threads',
  templateUrl: './threads.component.html',
  styleUrls: ['./threads.component.scss']
})
export class ThreadsComponent implements AfterViewInit,OnInit {
  discussion: Discussion;
  threads: Thread[];
  displayedColumns: string[] = ['threadId', 'topic', 'author','upvote', 'replyCount'];
  dataSource: MatTableDataSource<Thread>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  
  constructor(
    private activatedRoute: ActivatedRoute,
    private discussionService: DiscussionService,
    private threadService: ThreadService,
    private notification: NotificationService
  ) { }
  ngOnInit(){
    this.activatedRoute.paramMap.subscribe(params => { 
      let id = +params.get('id'); 
      this.discussionService.getById(id).subscribe(
        data => {
          this.discussion = data;
        },
        error => {
          this.notification.notify(error,NotificationEnum.Error);
        }
      )
      this.threadService.getByDiscussionId(id).subscribe(
        data => {
          this.threads = data;
          this.dataSource = new MatTableDataSource(this.threads);
        },
        error => {
          this.notification.notify(error,NotificationEnum.Error);
        }
      )
      
    });

  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
