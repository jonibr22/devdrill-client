import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-latest-courses',
  templateUrl: './latest-courses.component.html',
  styleUrls: ['./latest-courses.component.scss']
})
export class LatestCoursesComponent implements OnInit {
  courses = [
    {
      'imgUrl': '../../../../assets/xyz.png',
      'title':'Python Programming Language',
      'cluster':'Python',
      'author':'Filipino Santoso'
    },
    {
      'imgUrl': '../../../../assets/asdf.png',
      'title':'Object-Oriented Programming with PHP',
      'cluster':'PHP',
      'author':'Gilang Tanuwijaya'
    },
    {
      'imgUrl': '../../../../assets/keyboard.png',
      'title':'Asynchronus Programming in C#',
      'cluster':'C#',
      'author':'Levi Nathanael'
    },
    {
      'imgUrl': '../../../../assets/code.png',
      'title':'Introduction to Typescript',
      'cluster':'Typescript',
      'author':'Mike Wallowski'
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
