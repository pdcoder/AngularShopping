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

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CheckoutComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    ProductsComponent
    ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'login', component: LoginComponent},
      {path: 'products', component: ProductsComponent},
      {path: 'shopping-cart', component: ShoppingCartComponent},
      {path: 'check-out', component: CheckoutComponent, canActivate: [AuthGuardService]},
      {path: 'ordersuccess', component: OrderSuccessComponent, canActivate: [AuthGuardService]},

      {path: 'admin/products', component: AdminProductsComponent, canActivate: [AuthGuardService, AdminGuardService]},
      {path: 'admin/orders', component: AdminOrdersComponent, canActivate: [AuthGuardService,AdminGuardService]},

      {path: 'admin/products/new', component: AdminProductsComponent, canActivate: [AuthGuardService, AdminGuardService]},
      {path: 'admin/orders/new', component: AdminOrdersComponent, canActivate: [AuthGuardService,AdminGuardService]}
    ])
  ],
  providers: [
    AuthService,
    AuthGuardService,
    UserService,
    UserService,
    AdminGuardService,
    CategoryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }