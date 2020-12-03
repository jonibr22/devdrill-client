import { Component, Input, OnInit } from '@angular/core';
import { NotificationEnum } from '@app/core/enums/notification.enum';
import { NotificationService } from '@app/core/services/notification.service';
import { Course } from '@app/models/course.model';
import { CourseService } from '@app/services/course.service';

@Component({
  selector: 'app-related-course',
  templateUrl: './related-course.component.html',
  styleUrls: ['./related-course.component.scss']
})
export class RelatedCourseComponent implements OnInit {
  @Input() trackId;
  courses: Course[];
  constructor(
    private courseService: CourseService,
    private notification: NotificationService
  ) { }
  ngOnInit(): void {
    this.courseService.getByTrackId(this.trackId).subscribe(
      data => {
          this.courses = data;
      },
      error => {
          this.notification.notify(error,NotificationEnum.Error);
      }
    );
  }

}
