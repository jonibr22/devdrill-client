import { Component, OnInit } from '@angular/core';
import { stringToKeyValue } from '@angular/flex-layout/extended/typings/style/style-transforms';
import { NotificationEnum } from '@app/core/enums/notification.enum';
import { NotificationService } from '@app/core/services/notification.service';
import { Course } from '@app/models/course.model';
import { CourseService } from '@app/services/course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss'],
  providers: [CourseService]
})
export class CourseComponent implements OnInit {
  courses: Course[];
  filteredCourses = []
  constructor(
    private courseService: CourseService,
    private notification: NotificationService
  ) { 
    
  }

  ngOnInit(): void {
    this.courseService.getAll().subscribe(
      data => {
        this.courses = data;
        this.filteredCourses = this.courses
      },
      error => {
        this.notification.notify(error,NotificationEnum.Error);
      }
    )
  }
  
  filterCourse(searchText:string){ 
    this.filteredCourses = this.courses.filter(c => 
        c.name.toLowerCase().trim().includes(searchText.toLowerCase().trim())
    );
  }
  filterInstructor(searchText:string){
    this.filteredCourses = this.courses.filter(c => 
        c.instructor?.name.toLowerCase().trim().includes(searchText.toLowerCase().trim())
    );    
  }
  private doCompare(a: any, b: any, orderBy: string) {
    if(orderBy == "instructor"){
      if(a[orderBy].name < b[orderBy].name) return -1;
      else if(a[orderBy].name > b[orderBy].name) return 1;
      return 0;
    }
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
