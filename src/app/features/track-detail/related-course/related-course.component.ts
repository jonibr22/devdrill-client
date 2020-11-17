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
      'desc': `Dalam kursus ini, kalian akan diajarkan Typescript dari dasar hingga fitur-fitur 
               penting dari Typescript sampai di titik kalian dapat mengimplementasikan Typescript ke 
               dalam proyek apapun yang kalian kerjakan.`,
      'mentor': 'Mike Wallowski',
      'date': new Date(2012,9,12)
    },
    {
      'id': 2,
      'imgUrl': '../../../../assets/csharp.png',
      'title': 'Asynchronus Programming in C#', 
      'desc': `Dalam kursus ini, kalian akan diajarkan bahasa pemrograman C# dari dasar hingga fitur-fitur penting dari C# sampai di titik kalian dapat mengimplementasikan C# ke dalam proyek apapun yang kalian kerjakan. 
               Kursus ini juga menjadi dasar bagi kalian yang ingin belajar tentang framework ASP .NET`,
      'mentor': 'Levi Nathanael',
      'date': new Date(2014,9,2)
    },
    {
      'id': 3,
      'imgUrl': '../../../../assets/php.png',
      'title': 'Object-Oriented Programming with PHP', 
      'desc': `Dalam kursus ini, kalian akan diajarkan bahasa pemrograman PHP  dari dasar hingga fitur-fitur penting dari PHP sampai di titik kalian dapat mengimplementasikan PHP ke dalam proyek apapun yang kalian kerjakan. Kursus ini 
               juga menjadi dasar bagi kalian yang ingin belajar tentang framework Laravel`,
      'mentor': 'Gilang Tanuwijaya',
      'date': new Date(2014,12,2)
    },
    {
      'id': 4,
      'imgUrl': '../../../../assets/python.png',
      'title': 'Python Programming Language', 
      'desc': `Python adalah bahasa pemrograman terkenal yang dibuat dengan fokus untuk mempermudah programmer untuk membaca kodingnya. Dalam kursus ini, kalian akan 
               diajarkan Python dari dasar sampai kalian dapat mengimplementasikannya 
               dalam aplikasi kalian.`,
      'mentor': 'Filipino Santoso',
      'date': new Date(2019,3,19)
    }
  ]
  ngOnInit(): void {
  }

}
