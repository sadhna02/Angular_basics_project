import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import {TestComponent} from './test/test.component';
import { Test1Component } from './test/test1.component';
import { ProductListComponent } from './products/product-list.component';
import { ProductFilterPipe } from './products/product-filter.pipe';
import { StarComponent } from './shared/star.component';
import { HomeComponent } from './home/home.component';
import {RouterModule} from '@angular/router';
import { ProductDetailsComponent } from './products/product-details.component';
import { ProductDetailGuard } from './products/product-detail.guard';
import { CustomerComponent } from './customers/customer.component';
import { CustReactiveComponent } from './customers/cust-reactive.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    Test1Component,
    ProductListComponent,
    ProductFilterPipe,
    StarComponent,
    HomeComponent,
    ProductDetailsComponent,
    CustomerComponent,
    CustReactiveComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path:'home', component:HomeComponent},
      {path:'products', component:ProductListComponent},
      {path:'product/:id',
      canActivate:[ProductDetailGuard],
      component:ProductDetailsComponent},
      {path:'customer',component:CustomerComponent},
      {path:'cust-reactive',component:CustReactiveComponent},
      {path:'',component:HomeComponent},
      {path:'**',component:HomeComponent}
     
    ],{useHash:true})
  ],
  providers: [ProductDetailGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
