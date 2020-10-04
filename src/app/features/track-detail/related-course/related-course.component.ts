import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-related-course',
  templateUrl: './related-course.component.html',
  styleUrls: ['./related-course.component.scss']
})
export class RelatedCourseComponent implements OnInit {
  constructor() { }
  courses = [
    {
      'id': 1,
      'imgUrl': '../../../../assets/typescript.png',
      'title': 'Introduction to Typescript', 
      'desc': `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
               Obcaecati vero cupiditate commodi fugiat ullam consequatur possimus eligendi fuga. 
               Amet itaque cum veritatis voluptas illum sint velit, earum ex optio quam.`,
      'mentor': 'Mike Wallowski',
      'date': new Date(2012,9,12)
    },
    {
      'id': 2,
      'imgUrl': '../../../../assets/csharp.png',
      'title': 'Asynchronus Programming in C#', 
      'desc': `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
               Obcaecati vero cupiditate commodi fugiat ullam consequatur possimus eligendi fuga. 
               Amet itaque cum veritatis voluptas illum sint velit, earum ex optio quam.`,
      'mentor': 'Reinard Vallorant',
      'date': new Date(2014,12,2)
    },
    {
      'id': 3,
      'imgUrl': '../../../../assets/php.png',
      'title': 'Object-Oriented Programming with PHP', 
      'desc': `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
               Obcaecati vero cupiditate commodi fugiat ullam consequatur possimus eligendi fuga. 
               Amet itaque cum veritatis voluptas illum sint velit, earum ex optio quam.`,
      'mentor': 'Christopher Tungsten',
      'date': new Date(2014,9,2)
    },
    {
      'id': 4,
      'imgUrl': '../../../../assets/python.png',
      'title': 'Python Programming Language', 
      'desc': `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
               Obcaecati vero cupiditate commodi fugiat ullam consequatur possimus eligendi fuga. 
               Amet itaque cum veritatis voluptas illum sint velit, earum ex optio quam.`,
      'mentor': 'Timmy Lasso',
      'date': new Date(2019,3,19)
    }
  ]
  ngOnInit(): void {
  }

}
