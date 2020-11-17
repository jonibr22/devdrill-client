import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-latest-courses',
  templateUrl: './latest-courses.component.html',
  styleUrls: ['./latest-courses.component.scss']
})
export class LatestCoursesComponent implements OnInit {
  courses = [
    {
      'id': 4,
      'imgUrl': '../../../../assets/xyz.png',
      'title':'Python Programming Language',
      'cluster':'Python',
      'author':'Filipino Santoso'
    },
    {
      'id': 3,
      'imgUrl': '../../../../assets/asdf.png',
      'title':'Object-Oriented Programming with PHP',
      'cluster':'PHP',
      'author':'Gilang Tanuwijaya'
    },
    {
      'id': 2,
      'imgUrl': '../../../../assets/keyboard.png',
      'title':'Asynchronus Programming in C#',
      'cluster':'C#',
      'author':'Levi Nathanael'
    },
    {
      'id': 1,
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
