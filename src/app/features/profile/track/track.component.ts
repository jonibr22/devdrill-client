import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { MatPaginator } from '@angular/material/paginator';
import { ProgressBarMode } from '@angular/material/progress-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AuthenticationService } from '@app/core/services/authentication.service';
import { Progress } from '@app/models/progress.model';
import { Track } from '@app/models/track.model';
import { UserService } from '@app/services/user.service';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.scss']
})
export class TrackComponent implements AfterViewInit{
  displayedColumns: string[] = ['id','name','progress','toggle'];
  dataSource: MatTableDataSource<Track>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  readonly progress_color: ThemePalette = 'warn';
  readonly progress_mode: ProgressBarMode = 'determinate';

  constructor(
    private userService: UserService,
    private authenticationService: AuthenticationService
  ) { }

  ngAfterViewInit() {
    this.authenticationService.user.subscribe(user => {
      this.userService.getUserTracksWithOrderByLastActive(user.userId).subscribe(
        data => {
          this.dataSource = new MatTableDataSource(data)
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        }
      )
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}