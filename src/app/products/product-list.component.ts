import { Component } from '@angular/core';

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html'
})
export class ProductListComponent {
  public pageTitle: string = 'Product List';
  public filterText: string = '';
}
