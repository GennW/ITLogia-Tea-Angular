import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './components/pages/products/products.component';
import { OrderComponent } from './components/pages/order/order.component';
import { MainComponent } from './components/pages/main/main.component';
import { ProductComponent } from './components/pages/product/product.component';

const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' }, // Маршрут по умолчанию
  { path: 'main', component: MainComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'products/:id', component: ProductComponent },
  { path: 'order/:title', component: OrderComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
