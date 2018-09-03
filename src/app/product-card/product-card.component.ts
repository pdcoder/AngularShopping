import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../shopping-cart.service';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input('product') product: Product;
  @Input('show-actions') showActions = true;
  constructor(private cartService: ShoppingCartService) { }

  addToCart(product : ProductService){
    this.cartService.addToCart(product);
  }
  

}
