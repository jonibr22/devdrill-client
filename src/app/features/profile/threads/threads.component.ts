import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Thread } from '@app/models/thread.model';

const THREADS = [
  {'threadId': 1, 'topic': 'Gimana caranya config ini menjadi itu', 'upvote': 245, 'replyCount': 38},
  {'threadId': 2, 'topic': 'Dapat error 500, ada yang tau cara atasinnya', 'upvote': 185, 'replyCount': 32},
  {'threadId': 3, 'topic': 'Installation angular env', 'upvote': 435, 'replyCount': 54},
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
    threadId: THREADS[index].threadId,
    topic: THREADS[index].topic,
    upvote: THREADS[index].upvote,
    replyCount: THREADS[index].replyCount,
    author: 'self',
    insertDate: new Date(),
    detail: 'this is detail blabla',
    discussionId: 1,
    isInstructor: false
  };
}