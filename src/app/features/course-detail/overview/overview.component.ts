import { Component, Input, OnInit } from '@angular/core';
import { NotificationEnum } from '@app/core/enums/notification.enum';
import { NotificationService } from '@app/core/services/notification.service';
import { IProfilePicture } from '@app/interfaces/i-profile-picture.interface';
import { Course } from '@app/models/course.model';
import { CourseService } from '@app/services/course.service';
import { ProfilePictureHelper } from '@app/services/helpers/profile-picture-helper.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
  providers: [ProfilePictureHelper]
})
export class OverviewComponent implements OnInit,IProfilePicture {
  @Input() courseId: number;
  course: Course;
  course$: Observable<Course>;
  photo$: Observable<any>;
  pictureUrl: any;

  constructor(
    private courseService : CourseService,
    private profilePictureHelper: ProfilePictureHelper,
    private notification : NotificationService) { }

  ngOnInit(): void {
    this.course$ = this.courseService.getById(this.courseId);

    this.courseService.getById(this.courseId).subscribe(
      data => {
        this.course = data;
        this.profilePictureHelper.getPhoto(this.course.user.userId).subscribe(
          image => {
            this.profilePictureHelper.createImageFromBlob(image,this);
          },
          error => {
            this.profilePictureHelper.setUnknownUrl(this);
          }
        )
      },
      error => {
        this.notification.notify(error.detail, NotificationEnum.Error);
      }
    )
  }
}
