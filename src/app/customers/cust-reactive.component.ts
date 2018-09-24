import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators,AbstractControl,ValidatorFn} from '@angular/forms';
import {Customer} from './customer';

// function ratingRange(c:AbstractControl):{[key:string]:boolean}|null
// {
//    if(c.value !== undefined && (isNaN(c.value) || c.value<1 || c.value>5))
//    {
//      return { range:true}

//    }
//    return null
// }

function ratingRange(min:number,max:number):ValidatorFn{
  return (c:AbstractControl):{[key:string]:boolean}|null=>{
    if(c.value !== undefined && (isNaN(c.value) || c.value<1 || c.value>5))
   {
     return { range:true}

   }
  }
}


@Component({
  selector: 'app-cust-reactive',
  templateUrl: './cust-reactive.component.html',
  styleUrls: ['./cust-reactive.component.css']
})
export class CustReactiveComponent implements OnInit {
custReForm : FormGroup
customer : Customer = new Customer()

  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    //using formgroup
    // this.custReForm=new FormGroup({
    //   firstName : new FormControl(),
    //   lastName:new FormControl(),
    //   email:new FormControl()
    // })

    //using form builder service(mostly used as validations can be done here itself)

    this.custReForm=this.fb.group({
      firstName:['',[Validators.required,Validators.minLength(3)]],
      lastName:['',[Validators.required,Validators.maxLength(20)]],
      rating:['',ratingRange(1,5)],
      email:['',[Validators.required,Validators.pattern('[a-z0-9.-/.+-]+@[a-z0-9.-]+')]]
    })
  }

  showData()
  {
    this.custReForm.patchValue({
      firstName:'Jack',
      email:'jack@abc.com'
    })
  }

save()
{
  console.log(this.custReForm)
}
}
