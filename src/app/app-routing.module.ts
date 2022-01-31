import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainRoutingComponent } from './Components/main-routing/main-routing.component';
import { HomeComponent } from '././Components/Home/Home.component';
import { OrderDetailsComponent } from './Components/ProductList/order-details/order-details.component';
import { LogInFormComponent } from './Components/log-in-form/log-in-form.component';
import { ProductCardsComponent } from './Components/ProductList/ProductCards/ProductCards.component';
import { ProductDetailsComponent } from './Components/ProductList/product-details/product-details.component';
import { AddNewProductComponent } from './Components/ProductList/add-new-product/add-new-product.component';
import { EditProductComponent } from './Components/ProductList/edit-product/edit-product.component';
import { GuardUserAccessGuard } from './Guards/guard-user-access.guard';
import { AddProductWithAPIComponent } from './Components/ProductList/AddProductByusingAPI/add-product-with-api/add-product-with-api.component';

const routes: Routes = [
  {
    path: '',
    component: MainRoutingComponent,
    children: [
      { path: '', redirectTo: '/Home', pathMatch: 'full' }, //Default path
      { path: 'Home', component: HomeComponent },
      { path: 'Products', component: OrderDetailsComponent },
      {
        path: 'ProdCard',
        component: ProductCardsComponent,
        canActivate: [GuardUserAccessGuard],
      },
      { path: 'Products/:prodId', component: ProductDetailsComponent },
      { path: 'AddProduct', component: AddNewProductComponent },
      { path: 'AddNewProd' , component: AddProductWithAPIComponent},
      { path: 'EditProduct/:id', component: EditProductComponent },
    ],
  },
  { path: 'Log', component: LogInFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
