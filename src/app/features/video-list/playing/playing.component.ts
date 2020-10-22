import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-playing',
  templateUrl: './playing.component.html',
  styleUrls: ['./playing.component.scss']
})
export class PlayingComponent implements OnInit {
  @Input() currentItem;
  @Output() onPlayerReady = new EventEmitter();

  constructor() {
  }
  ngOnInit() : void{

  }

}
