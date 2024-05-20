import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    ProductCardComponent,

  ],
  imports: [
    CommonModule, 
    FormsModule,
    RouterModule
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    ProductCardComponent,
  ]
})
export class SharedModule { }
