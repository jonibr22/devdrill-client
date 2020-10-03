import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-panel',
  templateUrl: './search-panel.component.html',
  styleUrls: ['./search-panel.component.scss']
})
export class SearchPanelComponent implements OnInit {
  @Output() searchCourse = new EventEmitter();
  @Output() searchInstructor = new EventEmitter();
  @Output() sortState = new EventEmitter();

  sortOrderList = [
    {
      'value': '', 
      'text': '-- Order --'
    },
    {
      'value': 'asc', 
      'text': 'Ascending'
    },
    {
      'value': 'dsc',
      'text': 'Descending'
    }
  ]
  sortFieldList = [
    {
      'value': '', 
      'text': '-- None --'
    },
    {
      'value': 'title', 
      'text': 'Course'
    },
    {
      'value': 'mentor',
      'text': 'Instructor'
    },
    {
      'value': 'date',
      'text': 'Date'
    }
  ]
  currentSortOrder = '';
  currentSortField = '';
  constructor() { }

  ngOnInit(): void {
  }
  sortStateSetup(){
    this.sortState.emit({
      'order': this.currentSortOrder,
      'field': this.currentSortField
    })
  }
  setSortField(field: string){
    this.currentSortField = field;
    this.sortStateSetup();
  }
  setSortOrder(order: string){
    this.currentSortOrder = order;
    this.sortStateSetup();
  }
}
