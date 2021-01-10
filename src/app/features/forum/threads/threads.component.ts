import { AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table'
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationEnum } from '@app/core/enums/notification.enum';
import { NotificationService } from '@app/core/services/notification.service';
import { Discussion } from '@app/models/discussion.model';
import { Thread } from '@app/models/thread.model';
import { DiscussionService } from '@app/services/discussion.service';
import { ThreadService } from '@app/services/thread.service';
import { ThreadFormComponent } from './dialogs/thread-form/thread-form.component';

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
    private route: ActivatedRoute,
    private discussionService: DiscussionService,
    private threadService: ThreadService,
    private notification: NotificationService,
    private dialog: MatDialog,
    private router: Router
  ) { }
  ngOnInit(){
    this.route.paramMap.subscribe(params => { 
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
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        },
        error => {
          this.notification.notify(error,NotificationEnum.Error);
        }
      )
      
    });

  }
  ngAfterViewInit() {
    //this.dataSource.paginator = this.paginator;
    //this.dataSource.sort = this.sort;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  createThread(){
    const dialogRef = this.dialog.open(ThreadFormComponent);
    dialogRef.componentInstance.dialogRef = dialogRef;
    dialogRef.componentInstance.discussionId = this.discussion.discussionId;
    dialogRef.afterClosed().subscribe((result) => {
      if(result === "success"){
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigate(['./'], { relativeTo: this.route });
      }
    })
  }
}
