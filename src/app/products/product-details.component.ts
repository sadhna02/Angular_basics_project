import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product
  errorMessage
  pageTitle="Product Details"
  constructor(private _activatedRoute:ActivatedRoute,
  private _router:Router,
  private _productService:ProductService
  ) { }

  ngOnInit() {
    let id = +this._activatedRoute.snapshot.paramMap.get('id')
    if(id)
    {
      this._productService.getProduct(id)
      .subscribe((product)=>this.product = product,
    (error) => this.errorMessage = <any>error
  )
    }
  this.pageTitle += `:${id}`
  }
  
  // let id=this._activatedRoute.snapshot.params['id']
  onClick():void
  {
      this._router.navigate(['/products'])
  }
  

}
