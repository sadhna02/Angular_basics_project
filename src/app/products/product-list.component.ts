import { Component, OnInit } from '@angular/core';
import {IProduct} from './iproduct'
import {ProductFilterPipe} from './product-filter.pipe'
import { ProductService } from './product.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  errorMessage
  pageTitle :string ='Product Details Application'
  imgheight:number=50
  imgwidth:number=50
  showImg:boolean=false
  listFilter:string
  
   
toggleImage():void{
this.showImg = !this.showImg
}
//service is injected here
  constructor(private _productService:ProductService) { }

 products

  ngOnInit() {
    this._productService.getProducts()
    .subscribe((data)=>this.products=data,
    (error:any) => this.errorMessage = <any>error
  )
  }
  //products =this._productService.getProducts();
  onNotify(message:string)
  {
    this.pageTitle='Product List: ' + message
  }

  

}
