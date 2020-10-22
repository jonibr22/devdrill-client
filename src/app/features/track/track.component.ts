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
          'description': 'Pada track ini, anda akan fokus pada pemakaian HTML sebagai bahasa markup yang sering digunakan \
                          dalam pembuatan struktur tampilan web. Ketika lulus dari track ini, anda akan memahami lebih dalam \
                          sampai pada trik-triknya.'
        },
        {
          'id': 2,
          'logoUrl': '../../../assets/css.png',
          'title': 'CSS',
          'description': 'Pada track ini, anda akan fokus pada pemakaian CSS sebagai style yang sering digunakan \
                          untuk mempercantik tampilan web. Ketika lulus dari track ini, anda akan memahami lebih dalam \
                          sampai pada trik-triknya.'
        },
        {
          'id': 3,
          'logoUrl': '../../../assets/javascript.png',
          'title': 'Javascript',
          'description': 'Pada track ini, anda akan fokus pada pemakaian JS sebagai bahasa program yang sering digunakan \
                          dalam pembuatan logic dari web. Ketika lulus dari track ini, anda akan memahami lebih dalam \
                          sampai pada trik-triknya.'
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
          'description': 'Pada track ini, anda akan fokus pada pemakaian React.js sebagai framework frontend yang sering digunakan \
                          dalam pembuatan web application. Ketika lulus dari track ini, anda akan memahami lebih dalam \
                          sampai pada trik-triknya.'
        },
        {
          'id': 5,
          'logoUrl': '../../../assets/angular.png',
          'title': 'Angular Developer',
          'description': 'Pada track ini, anda akan fokus pada pemakaian Angular sebagai framework frontend yang sering digunakan \
                          dalam pembuatan web application. Ketika lulus dari track ini, anda akan memahami lebih dalam \
                          sampai pada trik-triknya.'
        },
        {
          'id': 6,
          'logoUrl': '../../../assets/vuejs.png',
          'title': 'Vue.js Developer',
          'description': 'Pada track ini, anda akan fokus pada pemakaian Vue.js sebagai framework frontend yang sering digunakan \
                          dalam pembuatan web application. Ketika lulus dari track ini, anda akan memahami lebih dalam \
                          sampai pada trik-triknya.'
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
          'description': 'Pada track ini, anda akan fokus pada pemakaian .NET Core sebagai framework backend yang sering digunakan \
                          dalam pembuatan web application. Ketika lulus dari track ini, anda akan memahami lebih dalam \
                          sampai pada trik-triknya.'
        },
        {
          'id': 8,
          'logoUrl': '../../../assets/laravel.png',
          'title': 'Laravel Developer',
          'description': 'Pada track ini, anda akan fokus pada pemakaian Laravel sebagai framework backend yang sering digunakan \
                          dalam pembuatan web application. Ketika lulus dari track ini, anda akan memahami lebih dalam \
                          sampai pada trik-triknya.'
        },
        {
          'id': 9,
          'logoUrl': '../../../assets/django.png',
          'title': 'Django Developer',
          'description': 'Pada track ini, anda akan fokus pada pemakaian Django sebagai framework backend yang sering digunakan \
                          dalam pembuatan web application. Ketika lulus dari track ini, anda akan memahami lebih dalam \
                          sampai pada trik-triknya.'
        },
        {
          'id': 10,
          'logoUrl': '../../../assets/nodejs.png',
          'title': 'Node.js Developer',
          'description': 'Pada track ini, anda akan fokus pada pemakaian Node.js sebagai run-time environment yang sering digunakan \
                          dalam pembuatan web application. Disini kita akan menggunakan Express.js sebagai media frameworknya. \
                          Ketika lulus dari track ini, anda akan memahami lebih dalam \
                          sampai pada trik-triknya.'
        },
        {
          'id': 11,
          'logoUrl': '../../../assets/spring.png',
          'title': 'Spring Developer',
          'description': 'Pada track ini, anda akan fokus pada pemakaian Spring sebagai framework backend yang sering digunakan \
                          dalam pembuatan web application. Ketika lulus dari track ini, anda akan memahami lebih dalam \
                          sampai pada trik-triknya.'
        }
      ]
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
