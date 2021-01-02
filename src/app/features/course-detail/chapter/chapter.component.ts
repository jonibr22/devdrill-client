import { Component, Input, OnInit } from '@angular/core';
import { NotificationEnum } from '@app/core/enums/notification.enum';
import { NotificationService } from '@app/core/services/notification.service';
import { LessonGroup } from '@app/models/lesson-group.model';
import { LessonGroupService } from '@app/services/lesson-group.service';
import { LessonService } from '@app/services/lesson.service';

@Component({
  selector: 'app-chapter',
  templateUrl: './chapter.component.html',
  styleUrls: ['./chapter.component.scss']
})
export class ChapterComponent implements OnInit {
  @Input() courseId: number;
  chapters: LessonGroup[];
  constructor(
    private lessonGroupService : LessonGroupService,
    private notification : NotificationService
  ) { }

  ngOnInit(): void {
    this.lessonGroupService.getByCourseId(this.courseId).subscribe(
      data => {
        this.chapters = data;
      },
      error => {
        this.notification.notify(error,NotificationEnum.Error);
      }
    )
  }

}
