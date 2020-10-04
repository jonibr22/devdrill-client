import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.scss']
})
export class TrackComponent implements OnInit {
  categoryTracks = [
    {
      'name':'Fundamental Tracks',
      'tracks':[
        {
          'id': 1,
          'logoUrl': '../../../assets/html.png',
          'title': 'HTML',
          'description': 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.\
                          A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally\
                          bred for hunting.'
        },
        {
          'id': 2,
          'logoUrl': '../../../assets/css.png',
          'title': 'CSS',
          'description': 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.\
                          A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally\
                          bred for hunting.'
        },
        {
          'id': 3,
          'logoUrl': '../../../assets/javascript.png',
          'title': 'Javascript',
          'description': 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.\
                          A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally\
                          bred for hunting.'
        }
      ]
    },
    {
      'name':'Frontend Developer Tracks',
      'tracks':[
        {
          'id': 4,
          'logoUrl': '../../../assets/react.png',
          'title': 'React.js Developer',
          'description': 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.\
                          A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally\
                          bred for hunting.'
        },
        {
          'id': 5,
          'logoUrl': '../../../assets/angular.png',
          'title': 'Angular Developer',
          'description': 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.\
                          A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally\
                          bred for hunting.'
        },
        {
          'id': 6,
          'logoUrl': '../../../assets/vuejs.png',
          'title': 'Vue.js Developer',
          'description': 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.\
                          A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally\
                          bred for hunting.'
        }
      ]
    },
    {
      'name':'Backend Developer Tracks',
      'tracks':[
        {
          'id': 7,
          'logoUrl': '../../../assets/netcore.png',
          'title': '.NET Core Developer',
          'description': 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.\
                          A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally\
                          bred for hunting.'
        },
        {
          'id': 8,
          'logoUrl': '../../../assets/laravel.png',
          'title': 'Laravel Developer',
          'description': 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.\
                          A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally\
                          bred for hunting.'
        },
        {
          'id': 9,
          'logoUrl': '../../../assets/django.png',
          'title': 'Django Developer',
          'description': 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.\
                          A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally\
                          bred for hunting.'
        },
        {
          'id': 10,
          'logoUrl': '../../../assets/nodejs.png',
          'title': 'Node.js Developer',
          'description': 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.\
                          A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally\
                          bred for hunting.'
        },
        {
          'id': 11,
          'logoUrl': '../../../assets/spring.png',
          'title': 'Spring Developer',
          'description': 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.\
                          A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally\
                          bred for hunting.'
        }
      ]
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
