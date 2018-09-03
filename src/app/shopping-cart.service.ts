import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { ProductService } from './product.service';
import 'rxjs/add/operator/take';
@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  constructor(private db: AngularFireDatabase) { }

  private create(){
    return this.db.list('shopping-cart').push({
      dateCreated: new Date().getTime();
    });
  }

  private getCart(cartId: string){
    return this.db.object('/shopping-carts/'+ cartId);
  }

  private async getOrCreateCartId()
  {
    let cartId = localStorage.getItem('cartId');
    if(!cartId){

      let result = await this.create();
        localStorage.setItem('cartId',result.key);
        return result.key; 
    }
      return cartId;
  }

  async addToCart(product: ProductService){
      let cartId = await this.getOrCreateCartId();
      this.db.object('/shopping-carts/'+cartId+'/items/'+product.$key);
      items$.take(1).subscribe(item => {
        if (item.$exists()) item$.update({ quantity: item.quantity+1});
        else item$.set({ product: product, quantity: 1});
      })
  }
}
