import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IProduct } from './product';

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {


  constructor() {
    this.filteredProducts = this.products;
  }

  pageTitle: string = 'Product List';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = true;
  filteredProducts : IProduct[] = [];
  products: IProduct[] = [  
      {
      "productId": 1,
      "productName": "Leaf Rake",
      "productCode": "GDN-0011",
      "releaseDate": "March 19, 2019",
      "description": "Leaf rake with 48-inch wooden handle.",
      "price": 19.95,
      "starRating": 3.2,
      "imageUrl": "assets/images/leaf_rake.png"
    },
    {
      "productId": 2,
      "productName": "Garden Cart",
      "productCode": "GDN-0023",
      "releaseDate": "March 18, 2019",
      "description": "15 gallon capacity rolling garden cart",
      "price": 32.99,
      "starRating": 4.2,
      "imageUrl": "assets/images/garden_cart.png"
    },
  ];

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
    console.log('Product List Component On Init Started')
  }  

  toggleImage() {
    this.showImage = !this.showImage;
  };

  onRatingClicked(message: string) {
    console.log(message);
  }
}
