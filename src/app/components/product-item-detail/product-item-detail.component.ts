import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/services/cart/cart.service';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css'],
})
export class ProductItemDetailComponent {
  id: number = 0;
  product: Product = {
    id: 0,
    name: '',
    url: '',
    description: '',
    price: 0,
  };

  constructor(
    private cartService: CartService,
    private productService: ProductService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // The following tutorial was used for this part
    // https://betterprogramming.pub/angular-6-url-parameters-860db789db85
    this.id = parseInt(this.route.snapshot.paramMap.get('id') as string);
    this.productService.getProduct(this.id).subscribe((data) => {
      this.product = data[0];
    });
  }

  addToCart(item: Product, quantity: string) {
    this.cartService.addToCart(item, parseInt(quantity));
  }
}
