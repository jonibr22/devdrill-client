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
    'description': 'Pada track ini, anda akan fokus pada pemakaian Angular sebagai framework frontend yang sering digunakan \
                    dalam pembuatan web application. Ketika lulus dari track ini, anda akan memahami lebih dalam \
                    sampai pada trik-triknya.'
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
