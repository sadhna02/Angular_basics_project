import { Component, OnInit, OnChanges, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit,OnChanges {
  //rating will come from parent component. this will go as a property binding in html
 @Input()  rating:number
  starWidth:number
//if multiple values type object in place string. we are going to pass notify to parent
  @Output() notify:EventEmitter<string>=new EventEmitter<string>()

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges()
  {
    this.starWidth=this.rating * 70/5

  }

  onClick()
  {
    this.notify.emit(`The rating ${this.rating} was Clicked!!`)
  }
}
