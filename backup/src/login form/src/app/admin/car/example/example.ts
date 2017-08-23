import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-example',
  template: `<h2>Child COMPONENT:</h2> 
  <div>{{user}}</div>
  <div>Counter: {{count}}</div>`
})
export class Example { 
  @Input() user: string;
  @Input() count: number;
  constructor() {
    console.log(this.user, this.count);
  }
}




