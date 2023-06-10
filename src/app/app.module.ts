import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreComponent } from './components/store/store.component';
import { StoreModule } from './store/store.module';
import { CartSummaryComponent } from './components/cart-summary/cart-summary.component';

@NgModule({
  declarations: [
    AppComponent,
    StoreComponent,
    CartSummaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
