import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test1',
  template: `
    <p>
      test1 works!
    </p>
  `,
  styles: [`
  p{
    color:red;
    font-size:20px;
    font-family:'Cursive';
  }
  `]
})
export class Test1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
