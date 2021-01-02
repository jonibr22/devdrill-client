import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { MatPaginator } from '@angular/material/paginator';
import { ProgressBarMode } from '@angular/material/progress-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AuthenticationService } from '@app/core/services/authentication.service';
import { Course } from '@app/models/course.model';
import { Progress } from '@app/models/progress.model';
import { UserService } from '@app/services/user.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements AfterViewInit,OnInit {
  displayedColumns: string[] = ['id','name','progress','toggle'];
  dataSource: MatTableDataSource<Course>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  readonly progress_color: ThemePalette = 'warn';
  readonly progress_mode: ProgressBarMode = 'determinate';

  constructor(
    private userService: UserService,
    private authenticationService: AuthenticationService
  ) { 
  }
  ngOnInit(){
    this.authenticationService.user.subscribe(user => {
      this.userService.getUserCoursesWithOrderByLastActive(user.userId).subscribe(
        data => {
          this.dataSource = new MatTableDataSource(data)
        }
      )
    })
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}