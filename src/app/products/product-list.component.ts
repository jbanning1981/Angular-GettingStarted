import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IProduct } from './product';
import { ProductService } from './product.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private productService: ProductService) {}

  pageTitle: string = 'Product List';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = true;
  filteredProducts : IProduct[] = [];
  products: IProduct[] = [];
  errorMessage: string;

  filterText: string = '';
  get listFilter() : string {
    return this.filterText;
  }
  set listFilter(value: string) {
    this.filterText = value;
    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
  }
  performFilter(listFilter: string): IProduct[] {
    listFilter = listFilter.toLocaleLowerCase();
    return this.products.filter((p: IProduct) => 
      p.productName.toLocaleLowerCase().indexOf(listFilter) !== -1);
      
  }

  ngOnInit(): void {
    console.log('Product List Component On Init Started');
    this.productService.getProducts().subscribe({
      next: products => {
        this.products = products;
        this.filteredProducts = this.products;
        this.listFilter = 'cart';            
      },
      error: err => this.errorMessage = err
    });

  }  

  toggleImage() {
    this.showImage = !this.showImage;
  };

  onRatingClicked(message: string) : void {
    this.pageTitle = 'Product List: ' + message;
  }
}
