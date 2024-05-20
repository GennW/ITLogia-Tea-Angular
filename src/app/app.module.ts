import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MainModule } from './views/main/main.module';
import { OrderModule } from './views/order/order.module';
import { SharedModule } from './shared/shared.module';
import { ProductsModule } from './views/products/products.module';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ProductsModule,
    MainModule,
    OrderModule,
    SharedModule,

    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
