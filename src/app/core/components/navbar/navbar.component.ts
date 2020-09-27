import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input() currentUser;
  @Output() signout = new EventEmitter();
  @Output() signin = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

}
