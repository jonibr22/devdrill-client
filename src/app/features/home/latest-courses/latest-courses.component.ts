import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from '@app/models/course.model';
import { CourseService } from '@app/services/course.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-latest-courses',
  templateUrl: './latest-courses.component.html',
  styleUrls: ['./latest-courses.component.scss']
})
export class LatestCoursesComponent implements OnInit {
  courses$: Observable<Course[]>;
  constructor(
    private courseService: CourseService
  ) { }

  ngOnInit(): void {
    this.courses$ = this.courseService.getLatest();
  }
}
