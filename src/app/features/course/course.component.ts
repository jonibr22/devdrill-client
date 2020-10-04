import { Component, OnInit } from '@angular/core';
import { stringToKeyValue } from '@angular/flex-layout/extended/typings/style/style-transforms';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
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
  filteredCourses = []
  constructor() { 
    this.filteredCourses = this.courses
  }

  ngOnInit(): void {
  }
  
  filterCourse(searchText:string){ 
    this.filteredCourses = this.courses.filter(c => 
        c.title.toLowerCase().trim().includes(searchText.toLowerCase().trim())
    );
  }
  filterInstructor(searchText:string){
    this.filteredCourses = this.courses.filter(c => 
        c.mentor.toLowerCase().trim().includes(searchText.toLowerCase().trim())
    );    
  }
  private doCompare(a: any, b: any, orderBy: string) {
    if(a[orderBy] < b[orderBy]) return -1;
    else if(a[orderBy] > b[orderBy]) return 1;
    return 0;
  }
  setOrderState(dict){
    this.order(dict.field,dict.order);
  }
  order(orderBy:string, kind:string){
    if(orderBy == '') return;
    if(kind == 'asc'){
      this.filteredCourses = this.filteredCourses.sort((a,b)=>this.doCompare(a,b,orderBy))
    }
    else if(kind == 'dsc'){
      this.filteredCourses = this.filteredCourses.sort((a,b)=>-this.doCompare(a,b,orderBy))
    }
  }
}
