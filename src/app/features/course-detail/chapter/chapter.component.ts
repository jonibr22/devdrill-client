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
          'desc': ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic deleniti consequuntur ipsa quibusdam optio a quaerat quos consequatur natus dolorum laborum vitae, aliquid maiores voluptatum explicabo autem earum! Eum, dolore!'
        },
        {
          'title': 'Selection and Loop Control',
          'duration': '01:58:35 - 02:38:14',
          'imgUrl': '../../../../assets/learn1.jpg',
          'desc': ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic deleniti consequuntur ipsa quibusdam optio a quaerat quos consequatur natus dolorum laborum vitae, aliquid maiores voluptatum explicabo autem earum! Eum, dolore!'
        },
        {
          'title': 'Creating a Basic Calculator',
          'duration': '02:38:15 - 02:45:14',
          'imgUrl': '../../../../assets/learn1.jpg',
          'desc': ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic deleniti consequuntur ipsa quibusdam optio a quaerat quos consequatur natus dolorum laborum vitae, aliquid maiores voluptatum explicabo autem earum! Eum, dolore!'
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
          'desc': ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic deleniti consequuntur ipsa quibusdam optio a quaerat quos consequatur natus dolorum laborum vitae, aliquid maiores voluptatum explicabo autem earum! Eum, dolore!'
        },
        {
          'title': 'Class and Object Creation',
          'duration': '03:02:35 - 03:20:21',
          'imgUrl': '../../../../assets/learn1.jpg',
          'desc': ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic deleniti consequuntur ipsa quibusdam optio a quaerat quos consequatur natus dolorum laborum vitae, aliquid maiores voluptatum explicabo autem earum! Eum, dolore!'
        },
        {
          'title': 'Making Basic Tidy Program',
          'duration': '03:20:22 - 03:35:50',
          'imgUrl': '../../../../assets/learn1.jpg',
          'desc': ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic deleniti consequuntur ipsa quibusdam optio a quaerat quos consequatur natus dolorum laborum vitae, aliquid maiores voluptatum explicabo autem earum! Eum, dolore!'
        },       
      ]
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
