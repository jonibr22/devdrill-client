import { AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table'
import { ActivatedRoute } from '@angular/router';
import { Thread } from '@app/models/thread.model';

const THREADS = [
  {
    'id': 1, 'topic': 'How to make this into this', 'upvote': 100, 'reply': 5, 'author': 'Mikaela Aiueo'
  },
  {
    'id': 2, 'topic': 'Error 500, i couldnt get the solution', 'upvote': 4, 'reply': 3, 'author': 'Crimson Kristoph' 
  }
]
@Component({
  selector: 'app-threads',
  templateUrl: './threads.component.html',
  styleUrls: ['./threads.component.scss']
})
export class ThreadsComponent implements AfterViewInit {
  displayedColumns: string[] = ['id', 'topic', 'author','upvote', 'reply'];
  dataSource: MatTableDataSource<Thread>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  
  constructor(/*private activatedRoute: ActivatedRoute*/) { 
    const datas = Array.from({length: 2}, (_, i) => dummyThreadInjector(i));
    // this.activatedRoute.paramMap.subscribe(params => { 
    //   let id = params.get('id'); 
    //   console.log("hehe: "+ id);
    // });
    this.dataSource = new MatTableDataSource(datas);
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

function dummyThreadInjector(index:number):Thread{
  return {
    id: THREADS[index].id,
    topic: THREADS[index].topic,
    upvote: THREADS[index].upvote,
    reply: THREADS[index].reply,
    author: THREADS[index].author
  };
}
