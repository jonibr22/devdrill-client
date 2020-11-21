import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Thread } from '@app/models/thread.model';

const THREADS = [
  {'id': 1, 'topic': 'Gimana caranya config ini menjadi itu', 'upvote': 245, 'reply': 38},
  {'id': 2, 'topic': 'Dapat error 500, ada yang tau cara atasinnya', 'upvote': 185, 'reply': 32},
  {'id': 3, 'topic': 'Installation angular env', 'upvote': 435, 'reply': 54},
]

@Component({
  selector: 'app-threads',
  templateUrl: './threads.component.html',
  styleUrls: ['./threads.component.scss']
})
export class ThreadsComponent implements AfterViewInit {
  displayedColumns: string[] = ['id','topic','upvote','reply','toggle'];
  dataSource: MatTableDataSource<Thread>;
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

function dummyProgressInjector(index:number): Thread{
  return {
    id: THREADS[index].id,
    topic: THREADS[index].topic,
    upvote: THREADS[index].upvote,
    reply: THREADS[index].reply,
    author: 'self'
  };
}