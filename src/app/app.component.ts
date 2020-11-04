import { Component } from '@angular/core';

@Component({
  selector: 'store-root',
  template: `
      <nav class="navbar navbar-expand-lg  navbar-dark bg-dark">
        <div class="navbar-brand">
          ACME 
        </div>
      </nav>  
    <div class="container-fluid">
      <pm-products></pm-products>
    </div>      
  `
})
export class AppComponent {
  pageTitle: string = 'Welcome to the ACME Demo Store'
}