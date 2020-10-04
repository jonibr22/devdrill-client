import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-track-detail',
  templateUrl: './track-detail.component.html',
  styleUrls: ['./track-detail.component.scss']
})
export class TrackDetailComponent implements OnInit {
  private sub;
  constructor(private activatedRoute : ActivatedRoute) { }
  track = {
    'id': 5,
    'logoUrl': '../../../assets/angular.png',
    'title': 'Angular Developer',
    'description': 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.\
                    A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally\
                    bred for hunting.'
  }
  ngOnInit(): void {
    this.sub=this.activatedRoute.paramMap.subscribe(params => { 
      console.log(params.get('id'));
      //  this.id = params.get('id'); 
      //  let products=this._productService.getProducts();
      //  this.product=products.find(p => p.productID==this.id);    
    });
  }

}
