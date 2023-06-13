import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreComponent } from './components/store/store.component';
import { StoreModule } from './store/store.module';
import { CartSummaryComponent } from './components/cart-summary/cart-summary.component';
import { CartDetailComponent } from './components/cart-detail/cart-detail.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { RouterModule } from '@angular/router';
import { StoreFirstGuard } from './storeFirst.guard';
import { FormsModule } from '@angular/forms';
//import { AuthComponent } from './admin/auth/auth.component';
//import { AdminComponent } from './admin/admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    StoreComponent,
    CartSummaryComponent,
    CartDetailComponent,
    CheckoutComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule,
    RouterModule.forRoot([
      {path: "store", component: StoreComponent, canActivate:[StoreFirstGuard]},
      {path: "cart", component: CartDetailComponent, canActivate:[StoreFirstGuard]},
      {path: "checkout", component: CheckoutComponent, canActivate:[StoreFirstGuard]},
      {path: "admin", loadChildren: () => import("./admin/admin.module")
                          .then(m => m.AdminModule),
                        canActivate: [StoreFirstGuard]},
      {path: "**", redirectTo: "/store"}
    ])
  ],
  providers: [StoreFirstGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
