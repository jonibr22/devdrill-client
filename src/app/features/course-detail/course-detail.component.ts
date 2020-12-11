import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute, ParamMap } from '@angular/router';
import { CourseService } from '@app/services/course.service';
import { LessonService } from '@app/services/lesson.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.scss'],
  providers: [CourseService,LessonService]
})
export class CourseDetailComponent implements OnInit {
  courseId: number;
  constructor(
    private activatedRoute : ActivatedRoute,
    private router : Router
  ) { 

  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => { 
      this.courseId = +params.get('id') || -1;
    });
  }
  ngOnDestroy() {
  }
}
