import { Component, Input, OnInit } from '@angular/core';
import { Course } from '@app/models/course.model';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {
  @Input() courses : Course[];
  constructor() { }

  ngOnInit(): void {
  }

}
