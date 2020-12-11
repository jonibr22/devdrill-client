import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationService } from '@app/core/services/notification.service';
import { LessonService } from '@app/services/lesson.service';
import { error } from 'protractor';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss'],
  providers: [LessonService]
})
export class VideoListComponent implements OnInit {

playlist=[
    {
      'title': 'Hello world in Typescript',
      'duration': '01:20:30 - 01:58:34',
      'imgUrl': '../../../../assets/learn1.jpg',
      'desc': 'Belajar dasar input dan ouput bahasa pemrograman Typescript dengan mencetak "hello world"',
      'src': '../../../../assets/sample.mp4',
      'type': 'video/mp4'
    },
    {
      'title': 'Selection and Loop Control',
      'duration': '01:58:35 - 02:38:14',
      'imgUrl': '../../../../assets/learn1.jpg',
      'desc': 'Belajar operasi seleksi dan repetisi dalam bahasa pemrograman Typescript',
      'src': '../../../../assets/sample2.mp4',
      'type': 'video/mp4'
    },
    {
      'title': 'Creating a Basic Calculator',
      'duration': '02:38:15 - 02:45:14',
      'imgUrl': '../../../../assets/learn1.jpg',
      'desc': 'Belajar mengimplementasikan materi dasar bahasa pemrograman Typescript dengan membuat kalkulator sederhana',
      'src': '../../../../assets/sample3.mp4',
      'type': 'video/mp4'
    },       
  ]
  currentIndex = 0;
  currentItem;
  api;
  
  onPlayerReady(api) {
    this.api = api;
    this.api.getDefaultMedia().subscriptions.loadedMetadata.subscribe(this.playVideo.bind(this));
    this.api.getDefaultMedia().subscriptions.ended.subscribe(this.nextVideo.bind(this));
  }
  onClickPlaylistItem(item, index: number) {
    this.currentIndex = index;
    this.currentItem = item;
  }
  nextVideo() {
    this.currentIndex++;

    if (this.currentIndex === this.playlist.length) {
      this.currentIndex = 0;
    }

    this.currentItem = this.playlist[this.currentIndex];
  }

  playVideo() {
    this.api.play();
  }

  constructor(
    private activatedRoute: ActivatedRoute,
    private lessonService: LessonService,
    private notification: NotificationService,
    private router: Router
    ) {
  }
  courseId: number;
  ngOnInit() : void{
    this.activatedRoute.paramMap.subscribe(params => { 
      this.courseId = +params.get('id');
    });
    this.activatedRoute.queryParamMap.subscribe(params => {
      this.currentIndex = +params.get('c') || 0;
    })
    this.currentItem = this.playlist[this.currentIndex]
  }

}
