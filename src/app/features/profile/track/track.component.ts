import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Progress } from '@app/models/progress.model';

const TRACKS = [
  {'id': 1, 'name': 'Angular Developer Track', 'progress': 100},
  {'id': 2, 'name': 'Laravel Developer Track', 'progress': 85},
  {'id': 3, 'name': 'Node.js Developer Track', 'progress': 45},
]
@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.scss']
})
export class TrackComponent implements AfterViewInit {
  displayedColumns: string[] = ['id','name','progress','toggle'];
  dataSource: MatTableDataSource<Progress>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() { 
    const datas = Array.from({length: 2}, (_,i)=>dummyProgressInjector(i));
    this.dataSource = new MatTableDataSource(datas)
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

function dummyProgressInjector(index:number):Progress{
  return {
    id: TRACKS[index].id,
    name: TRACKS[index].name,
    progress: TRACKS[index].progress
  };
}