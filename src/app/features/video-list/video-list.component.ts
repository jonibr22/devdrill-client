import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss']
})
export class VideoListComponent implements OnInit {

playlist=[
    {
      'title': 'Hello world in Typescript',
      'duration': '01:20:30 - 01:58:34',
      'imgUrl': '../../../../assets/learn1.jpg',
      'desc': 'Belajar dasar input dan ouput bahasa pemrograman Typescript dengan mencetak "hello world"',
      'src': 'http://static.videogular.com/assets/videos/videogular.mp4',
      'type': 'video/mp4'
    },
    {
      'title': 'Selection and Loop Control',
      'duration': '01:58:35 - 02:38:14',
      'imgUrl': '../../../../assets/learn1.jpg',
      'desc': 'Belajar operasi seleksi dan repetisi dalam bahasa pemrograman Typescript',
      'src': 'http://static.videogular.com/assets/videos/big_buck_bunny_720p_h264.mov',
      'type': 'video/mp4'
    },
    {
      'title': 'Creating a Basic Calculator',
      'duration': '02:38:15 - 02:45:14',
      'imgUrl': '../../../../assets/learn1.jpg',
      'desc': 'Belajar mengimplementasikan materi dasar bahasa pemrograman Typescript dengan membuat kalkulator sederhana',
      'src': 'http://static.videogular.com/assets/videos/elephants-dream.mp4',
      'type': 'video/mp4'
    },       
  ]
  currentIndex = 0;
  currentItem = this.playlist[this.currentIndex];
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

  constructor() {
  }
  ngOnInit() : void{

  }

}
