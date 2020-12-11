import { Component, Input, OnInit } from '@angular/core';
import { NotificationEnum } from '@app/core/enums/notification.enum';
import { NotificationService } from '@app/core/services/notification.service';
import { Course } from '@app/models/course.model';
import { CourseService } from '@app/services/course.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  @Input() courseId: number;
  course: Course;
  constructor(
    private courseService : CourseService,
    private notification : NotificationService) { }

  ngOnInit(): void {
    this.courseService.getById(this.courseId).subscribe(
      data => {
        this.course = data;
      },
      error => {
        this.notification.notify(error,NotificationEnum.Error);
      }
    )
  }

}
