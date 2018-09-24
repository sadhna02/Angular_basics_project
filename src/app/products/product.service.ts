import { Injectable } from '@angular/core';
import {IProduct} from './iproduct';
import {HttpClient} from '@angular/common/http'
import {Observable, throwError} from 'rxjs';
import {map,tap,catchError} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products:IProduct[]
// getProducts():IProduct[]
// {
//   return this.products
// }

  constructor(private _httpClient:HttpClient) { }
  // private _productUrl='./assets/api/data/products.json'
 private _productUrl='http://localhost:3000/api/products'

 getProducts():Observable<IProduct[]>
 {
  // console.log(this._httpClient.get<IProduct[]>(this._productUrl))
   return this._httpClient.get<IProduct[]>(this._productUrl)//to show lazy loading in console pipe and tap are used
   .pipe(
     tap((data)=>console.log('All Data:' + JSON.stringify(data))),
     catchError(this.handleError)

   )
 }

 getProduct(id:number):Observable<IProduct>
 {
   return this.getProducts().pipe(
     map((products:IProduct[])=>products.find((p)=>p.productId===id)),
     tap((product)=>console.log('One Product: ' + product.productName)),
     catchError(this.handleError)
    
    
   )
 }

 handleError(err):Observable<any>
 {
   let errorMsg=''
   if(err.error instanceof Error)
   {
     errorMsg=`An error occured: ${err.error.message}`
   }
   else{
     errorMsg=`server returned with status code : ${err.status} and error message: ${err.message}`
   }
   console.log(errorMsg)
   return throwError(errorMsg)
 }
}
