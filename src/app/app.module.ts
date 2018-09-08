import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { NavbarComponent } from './navbar/navbar.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import {RouterModule} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';
import { AuthService } from './auth.service';
import { AuthGuardService } from './AuthGuard.service';
import { UserService } from './user.service';
import { AdminGuardService } from './admin-guard.service';
import { CategoryService } from './category.service';
import {FormsModule} from '@angular/forms';
import { ProductService } from './product.service';
import {CustomFormsModule} from 'ng2-validation';
import { ProductFilter } from './product-filter.component/product-filter.component.component';
import { CartComponent } from './cart/cart.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ShoppingCartService } from './shopping-cart.service';
import { OrderService } from './order.service';
import { ProductQuantityComponent } from './product-quantity/product-quantity.component';
@NgModule({
  declarations: [
    AppComponent
    ],
    imports: [
      BrowserModule,
      SharedModule,
      AdminModule,
      ShoppingModule,
      CoreModule,
      AngularFireModule.initializeApp(environment.firebase),
      RouterModule.forRoot([
        { path: '', component: ProductsComponent },
        { path: 'login', component: LoginComponent },
      ])    
    ],
  providers: [
    AdminGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }