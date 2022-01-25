import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainRoutingComponent} from './Components/main-routing/main-routing.component'
import {HomeComponent} from '././Components/Home/Home.component';
import { OrderDetailsComponent } from './Components/ProductList/order-details/order-details.component';
import { LogInFormComponent } from './Components/log-in-form/log-in-form.component';

const routes: Routes = [
  {path: '', component: MainRoutingComponent
  , children:[
    {path: '', redirectTo: '/Home', pathMatch: 'full'}, //Default path
    {path: 'Home', component: HomeComponent},
    {path: 'Products', component: OrderDetailsComponent},
  ]},
  {path:'Log', component:LogInFormComponent},
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
