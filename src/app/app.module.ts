import { IsAdminService } from './is-admin.service';
import { UserService } from './user.service';
import { AdminAuthGuard } from './admin-auth-guard.service';
import { environment } from './../environments/environment';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { LoginComponent } from './login/login.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth-guard.service';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProductsComponent,
    CheckoutComponent,
    MyOrdersComponent,
    OrderSuccessComponent,
    LoginComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    ShoppingCartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path:'',component:HomeComponent},
      {path:'products',component:ProductsComponent},
      {path:'login',component:LoginComponent},
      {path:'my/orders',component:MyOrdersComponent},

      {path:'checkout',component:CheckoutComponent,canActivate:[AuthGuard]},
      {path:'shopping-cart',component:ShoppingCartComponent,canActivate:[AuthGuard]},
      {path:'order/success',component:OrderSuccessComponent,canActivate:[AuthGuard]},
      {path:'admin/products',component:AdminProductsComponent,canActivate:[AuthGuard,AdminAuthGuard]},
      {path:'admin/orders',component:AdminOrdersComponent,canActivate:[AuthGuard,AdminAuthGuard]},

    ]),
    NgbModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
  ],
  providers: [AuthService,AuthGuard,AdminAuthGuard,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
