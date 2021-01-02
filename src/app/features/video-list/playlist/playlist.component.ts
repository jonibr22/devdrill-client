import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss']
})
export class PlaylistComponent implements OnInit {
  @Input() currentCourseId;
  @Input() currentLessonId;
  @Input() lessonGroups$;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {

  }

  onClick(v:number){
    this.router.navigate(['..','videolist',this.currentCourseId],{queryParams: {v: v}});
  }

}
