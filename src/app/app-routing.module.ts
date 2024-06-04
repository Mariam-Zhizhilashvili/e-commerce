import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductViewComponent } from './component/product-view/product-view.component';
import { ProductDetailComponent } from './component/product-detail/product-detail.component';
import { CartPageComponent } from './component/cart-page/cart-page.component';
import { OrderPageComponent } from './component/order-page/order-page.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactComponent } from './contact/contact.component';
import { HomeDesignComponent } from './home-design/home-design.component';
import { LoginComponent } from './login/login.component';
import { UserHomeDesignComponent } from './user-home-design/user-home-design.component';

const routes: Routes = [
  {path: '', component:HomeDesignComponent},
  {path: 'product-view', component:ProductViewComponent},
  {path: 'product-detail/:productid',component:ProductDetailComponent},
  {path: 'cart-page', component: CartPageComponent},
  {path: 'order-page', component: OrderPageComponent},
  {path: 'aboutus', component: AboutusComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'login', component: LoginComponent},
  {path: 'user-home-design', component:UserHomeDesignComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
