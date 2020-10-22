import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss']
})
export class PlaylistComponent implements OnInit {
  @Input() currentItem;
  @Input() playlist;
  @Output() onClickPlaylistItem = new EventEmitter<object>();

  constructor() { }

  ngOnInit(): void {
  }

}
