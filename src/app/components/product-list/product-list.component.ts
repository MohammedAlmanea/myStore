import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  productList: Product[] = [];

  constructor(private productService: ProductService) {
    console.log('This is working2')
  }

  ngOnInit(): void {
    console.log('this is working');
    this.productService.getProducts().subscribe((data) => {
      this.productList = data;
    });
  }
}
