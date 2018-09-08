import { Component, OnInit, Input } from '@angular/core';
import { ShoppingCartService } from '../shared/services/shopping-cart.service';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input('product') product: ProductService;
  @Input('show-actions') showActions = true;
  @Input('shopping-cart') shoppingCart;
  constructor(private cartService: ShoppingCartService) { }

  addToCart(product : ProductService){
    this.cartService.addToCart(product);
  }
  
  getQuantity(){
    let item = this.shoppingCart.items[this.product.$key];
    return item ? item.quantity : 0;
  }

}
