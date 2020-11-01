import { Component } from '@angular/core';

@Component({
  selector: 'store-root',
  template: `
    <div>
      <h1>{{pageTitle}}</h1>
      <div>My first component</div>
    </div>      
  `
})
export class AppComponent {
  pageTitle: string = 'Welcome to the ACME Demo Store'
}