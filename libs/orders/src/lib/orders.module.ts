import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route, Routes } from '@angular/router';
import { ordersRoutes } from './lib.routes';
import { CartService } from './services/cart.service';
import { CartIconComponent } from './components/cart-icon/cart-icon.component';
import {BadgeModule} from 'primeng/badge';
import { ButtonModule } from 'primeng/button';
import { InputNumberModule } from 'primeng/inputnumber';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { OrderSummaryComponent } from './components/order-summary/order-summary.component';
import { CheckoutPageComponent } from './pages/checkout-page/checkout-page.component';
import { InputMaskModule } from 'primeng/inputmask';
import { DropdownModule } from 'primeng/dropdown';
import { ThankYouComponent } from './thank-you/thank-you.component';




const routes: Routes = [
  {
    path: 'cart',
    component: CartPageComponent
  },
  {
    path: 'checkout',
    component: CheckoutPageComponent
  },
  {
    path: 'success',
    component: ThankYouComponent
  }]

@NgModule({
    imports: [CommonModule,
      BadgeModule,
      RouterModule.forChild(routes),
      ButtonModule,
      InputNumberModule,
      FormsModule,
      ReactiveFormsModule,
      InputTextModule,
      InputMaskModule,
      DropdownModule,
    ],
    providers: [],
    declarations: [
      CartIconComponent,
      CartPageComponent,
      OrderSummaryComponent,
      CheckoutPageComponent,
      ThankYouComponent
    ],exports: [CartIconComponent, CartPageComponent, OrderSummaryComponent, CheckoutPageComponent, ThankYouComponent]
  })
export class OrdersModule {
  constructor(cartService: CartService) {
    cartService.initCartLocalStorage();
  }
}
