import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '@app/core/services/authentication.service';
import { Course } from '@app/models/course.model';
import { Thread } from '@app/models/thread.model';
import { Track } from '@app/models/track.model';
import { User } from '@app/models/user.model';
import { ThreadService } from '@app/services/thread.service';
import { UserService } from '@app/services/user.service';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-progress-view',
  templateUrl: './progress-view.component.html',
  styleUrls: ['./progress-view.component.scss']
})
export class ProgressViewComponent implements OnInit {
  user: User;
  threadLatest$: Observable<Thread>;
  threadsCount$: Observable<number>;
  courseLatest$: Observable<Course>;
  coursesDone$: Observable<number>;
  trackLatest$: Observable<Track>;
  tracksDone$: Observable<number>;
  constructor(
    private userService: UserService,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit(): void {
    this.authenticationService.user.subscribe(user => {
      this.threadLatest$ = this.userService.getUserThreadsWithOrderByNewest(user.userId)
        .pipe(map(val => val[0]));      
      this.threadsCount$ = this.userService.getUserThreadsWithOrderByNewest(user.userId)
        .pipe(map(val => val.length));
      this.courseLatest$ = this.userService.getUserCoursesWithOrderByLastActive(user.userId)
        .pipe(map(val => val[0]));
      this.coursesDone$ = this.userService.getUserCoursesWithOrderByLastActive(user.userId)
        .pipe(map(val => val.filter(e => e.progress == 1.0 ).length));
      this.trackLatest$ = this.userService.getUserTracksWithOrderByLastActive(user.userId)
        .pipe(map(val => val[0]));
      this.tracksDone$ = this.userService.getUserTracksWithOrderByLastActive(user.userId)
        .pipe(map(val => val.filter(e => e.progress == 1.0 ).length));
      this.user = user;
    });
  }

}
