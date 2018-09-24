import { Component, OnInit } from '@angular/core';
import {Customer} from './customer';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customer:Customer = new Customer()

  constructor() { }

  ngOnInit() {
  }
save(custForm:NgForm)
{
  console.log(custForm.form)
  console.log('Save:'+JSON.stringify(custForm.value))
}
}
