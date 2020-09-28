import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  slides = [
    {
      'url':'https://wallpapercave.com/wp/wp2342125.jpg',
      'alt':'News 1',
      'title':'Mind Breakthrough',
      'detail':'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'idName':'news1'
    },
    {
      'url':'https://wallpapercave.com/wp/wp2342127.jpg',
      'alt':'News 2',
      'title':'Going to The Moon',
      'detail':'Consectetur tortor volutpat pretium.',
      'idName':'news2'
    }
  ]
  activeId = 'news1'
  constructor() { }

  ngOnInit(): void {
  }

}
