import { Component, OnInit } from '@angular/core';
const THREAD_CATEGORIES = [
  {
    'name': 'Public Discussion',
    'discussion': [
      {'id': 1,'name': 'General Advice', 'total_thread': 4300, 'total_message': 15000},
      {'id': 2,'name': 'Other Frameworks', 'total_thread': 5300, 'total_message': 17011}
    ],
    'photo': null
  },
  {
    'name': 'Angular Discussion',
    'discussion': [
      {'id': 3,'name': 'Installation', 'total_thread': 1300, 'total_message': 12000},
      {'id': 4,'name': 'Regarding Video', 'total_thread': 1300, 'total_message': 12000},
      {'id': 5,'name': 'Development Advice', 'total_thread': 1300, 'total_message': 12000},
    ],
    'photo': 'angular.png'
  },
  {
    'name': 'Node.js Discussion',
    'discussion': [
      {'id': 6,'name': 'Installation', 'total_thread': 1300, 'total_message': 12000},
      {'id': 7,'name': 'Regarding Video', 'total_thread': 1300, 'total_message': 12000},
      {'id': 8,'name': 'Development Advice', 'total_thread': 1300, 'total_message': 12000},
    ],
    'photo': 'nodejs.png'
  },
  {
    'name': 'ASP.NET Core Discussion',
    'discussion': [
      {'id': 9,'name': 'Installation', 'total_thread': 1300, 'total_message': 12000},
      {'id': 10,'name': 'Regarding Video', 'total_thread': 1300, 'total_message': 12000},
      {'id': 11,'name': 'Development Advice', 'total_thread': 1300, 'total_message': 12000},
    ],
    'photo': 'netcore.png'
  },
  {
    'name': 'Laravel Discussion',
    'discussion': [
      {'id': 12,'name': 'Installation', 'total_thread': 1300, 'total_message': 12000},
      {'id': 13,'name': 'Regarding Video', 'total_thread': 1300, 'total_message': 12000},
      {'id': 14,'name': 'Development Advice', 'total_thread': 1300, 'total_message': 12000},
    ],
    'photo': 'laravel.png'
  },
  {
    'name': 'React.js Discussion',
    'discussion': [
      {'id': 15,'name': 'Installation', 'total_thread': 1300, 'total_message': 12000},
      {'id': 16,'name': 'Regarding Video', 'total_thread': 1300, 'total_message': 12000},
      {'id': 17,'name': 'Development Advice', 'total_thread': 1300, 'total_message': 12000},
    ],
    'photo': 'react.png'
  },
  {
    'name': 'Vue.js Discussion',
    'discussion': [
      {'id': 18,'name': 'Installation', 'total_thread': 1300, 'total_message': 12000},
      {'id': 19,'name': 'Regarding Video', 'total_thread': 1300, 'total_message': 12000},
      {'id': 20,'name': 'Development Advice', 'total_thread': 1300, 'total_message': 12000},
    ],
    'photo': 'vuejs.png'
  },
  {
    'name': 'Django Discussion',
    'discussion': [
      {'id': 21,'name': 'Installation', 'total_thread': 1300, 'total_message': 12000},
      {'id': 22,'name': 'Regarding Video', 'total_thread': 1300, 'total_message': 12000},
      {'id': 23,'name': 'Development Advice', 'total_thread': 1300, 'total_message': 12000},
    ],
    'photo': 'django.png'
  },
  {
    'name': 'Spring Discussion',
    'discussion': [
      {'id': 24,'name': 'Installation', 'total_thread': 1300, 'total_message': 12000},
      {'id': 25,'name': 'Regarding Video', 'total_thread': 1300, 'total_message': 12000},
      {'id': 26,'name': 'Development Advice', 'total_thread': 1300, 'total_message': 12000},
    ],
    'photo': 'spring.png'
  }
]
@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss']
})
export class GeneralComponent implements OnInit {
  threadSections = THREAD_CATEGORIES
  constructor() { }

  ngOnInit(): void {
  }

}
