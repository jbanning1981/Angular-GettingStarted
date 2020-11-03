import { Component } from '@angular/core';

@Component({
  selector: 'store-root',
  template: `
    <div class="container-fluid">
      <nav class="nav">
        
      </nav>
      <pm-products></pm-products>
    </div>      
  `
})
export class AppComponent {
  pageTitle: string = 'Welcome to the ACME Demo Store'
}