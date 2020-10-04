import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.scss']
})
export class CourseDetailComponent implements OnInit {
  private sub;
  constructor(private activatedRoute : ActivatedRoute) { }

  course = {
    'id': 1,
    'imgUrl': '../../../assets/typescript.png',
    'title': 'Introduction to Typescript', 
    'desc': `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
             Obcaecati vero cupiditate commodi fugiat ullam consequatur possimus eligendi fuga. 
             Amet itaque cum veritatis voluptas illum sint velit, earum ex optio quam.`,
    'mentor': 'Mike Wallowski',
    'date': new Date(2012,9,12)
  }

  ngOnInit(): void {
    this.sub=this.activatedRoute.paramMap.subscribe(params => { 
      console.log(params.get('id'));
      //  this.id = params.get('id'); 
      //  let products=this._productService.getProducts();
      //  this.product=products.find(p => p.productID==this.id);    
    });
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
