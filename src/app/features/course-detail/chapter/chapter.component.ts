import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chapter',
  templateUrl: './chapter.component.html',
  styleUrls: ['./chapter.component.scss']
})
export class ChapterComponent implements OnInit {
  chapters = [
    {
      'title': 'Basic Operation and Arithmetic',
      'videos': [
        {
          'title': 'Hello world in Typescript',
          'duration': '01:20:30 - 01:58:34',
          'imgUrl': '../../../../assets/learn1.jpg',
          'desc': 'Belajar dasar input dan ouput bahasa pemrograman Typescript dengan mencetak "hello world"'
        },
        {
          'title': 'Selection and Loop Control',
          'duration': '01:58:35 - 02:38:14',
          'imgUrl': '../../../../assets/learn1.jpg',
          'desc': 'Belajar operasi seleksi dan repetisi dalam bahasa pemrograman Typescript'
        },
        {
          'title': 'Creating a Basic Calculator',
          'duration': '02:38:15 - 02:45:14',
          'imgUrl': '../../../../assets/learn1.jpg',
          'desc': 'Belajar mengimplementasikan materi dasar bahasa pemrograman Typescript dengan membuat kalkulator sederhana'
        },       
      ]
    },
    {
      'title': 'Function and Class',
      'videos': [
        {
          'title': 'Defining a Function',
          'duration': '02:45:15 - 03:02:34',
          'imgUrl': '../../../../assets/learn1.jpg',
          'desc': 'Dalam pemrograman kita sebisa mungkin tidak ingin menulis ulang code yang sama. Maka dari itu kita dapat membuat function untuk menghindari menulis code tersebut lebih dari satu kali. Pada sesi ini kalian akan diajarkan untuk membuat function'
        },
        {
          'title': 'Class and Object Creation',
          'duration': '03:02:35 - 03:20:21',
          'imgUrl': '../../../../assets/learn1.jpg',
          'desc': 'Pada sesi ini kalian akan diajarkan mengenai cara membuat class dan object. Pembuatan class dan object sangatlah penting bagi seorang software engineer karena banyak framework yang menggunakan konsep pmrograman berorientasi object.'
        },
        {
          'title': 'Making Basic Tidy Program',
          'duration': '03:20:22 - 03:35:50',
          'imgUrl': '../../../../assets/learn1.jpg',
          'desc': 'Pada sesi ini kalian akan diajarkan untuk menghasilkan code yang rapi dan mudah untuk dibaca orang lain'
        },       
      ]
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
