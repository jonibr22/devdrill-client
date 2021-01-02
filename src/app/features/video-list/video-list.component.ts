import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationEnum } from '@app/core/enums/notification.enum';
import { AuthenticationService } from '@app/core/services/authentication.service';
import { NotificationService } from '@app/core/services/notification.service';
import { LessonGroup } from '@app/models/lesson-group.model';
import { Lesson } from '@app/models/lesson.model';
import { LessonGroupService } from '@app/services/lesson-group.service';
import { LessonService } from '@app/services/lesson.service';
import { UserService } from '@app/services/user.service';
import { error } from 'protractor';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss'],
  providers: [LessonGroupService,LessonService,UserService]
})
export class VideoListComponent implements OnInit {
  courseId: number;
  lessonGroups$: Observable<LessonGroup[]>;
  lesson$: Observable<Lesson>;
  api;
  
  onPlayerReady(api) {
    this.api = api;
    this.api.getDefaultMedia().subscriptions.loadedMetadata.subscribe(this.playVideo.bind(this));
  }

  playVideo() {
    this.api.play();
  }

  constructor(
    private route: ActivatedRoute,
    private lessonGroupService: LessonGroupService,
    private lessonService: LessonService,
    private userService: UserService,
    private authenticationService: AuthenticationService,
    private notification: NotificationService,
    private router: Router
    ) {
  }
  ngOnInit(): void{
    this.route.params.subscribe(params => {
        this.courseId = +params["id"];
        this.lessonGroups$ = this.lessonGroupService.getByCourseId(this.courseId);
    });
    this.route.queryParams.subscribe(params => {
        let v = +params["v"];
        this.lesson$ = this.lessonService.getById(+v);
        this.authenticationService.user.subscribe(user => {
          this.userService.setLessonAsDone(v,user.userId).subscribe();
        })
    });   
  }

}
