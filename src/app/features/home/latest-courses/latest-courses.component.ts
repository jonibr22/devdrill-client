import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-latest-courses',
  templateUrl: './latest-courses.component.html',
  styleUrls: ['./latest-courses.component.scss']
})
export class LatestCoursesComponent implements OnInit {
  courses = [
    {
      'imgUrl': '../../../../assets/learn1.jpg',
      'title':'Doing nothing as above mentioned',
      'cluster':'Angular 9 / Typescript',
      'author':'Jake Lumbergerk'
    },
    {
      'imgUrl': '../../../../assets/learn1.jpg',
      'title':'Doing nothing as above mentioned',
      'cluster':'Angular 9 / Typescript',
      'author':'Jake Lumbergerk'
    },
    {
      'imgUrl': '../../../../assets/learn1.jpg',
      'title':'Doing nothing as above mentioned',
      'cluster':'Angular 9 / Typescript',
      'author':'Jake Lumbergerk'
    },
    {
      'imgUrl': '../../../../assets/learn1.jpg',
      'title':'Doing nothing as above mentioned',
      'cluster':'Angular 9 / Typescript',
      'author':'Jake Lumbergerk'
    },
    {
      'imgUrl': '../../../../assets/learn1.jpg',
      'title':'Doing nothing as above mentioned',
      'cluster':'Angular 9 / Typescript',
      'author':'Jake Lumbergerk'
    },
    {
      'imgUrl': '../../../../assets/learn1.jpg',
      'title':'Doing nothing as above mentioned',
      'cluster':'Angular 9 / Typescript',
      'author':'Jake Lumbergerk'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
