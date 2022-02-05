import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { ProductsComponent } from './Components/ProductList/productsTable/products.component';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BoxStyleDirective } from './Components/Directives/box-style.directive';
import { CurrencyPipePipe } from './Components/Pipes/CurrencyPipe/currency-pipe.pipe';
import { CreditCardSplicePipe } from './Components/Pipes/Credit-Card-splice/CreditCardSplice.pipe';
import { BirthdayFromIDPipe } from './Components/Pipes/BirthdayPipe/birthday-from-id.pipe';
import { OrderDetailsComponent } from './Components/ProductList/order-details/order-details.component';
import { HomeComponent } from './Components/Home/Home.component';
import { ProductCardsComponent } from './Components/ProductList/ProductCards/ProductCards.component';
import { MainRoutingComponent } from './Components/main-routing/main-routing.component';
import { LogInFormComponent } from './Components/log-in-form/log-in-form.component';
import { ProductDetailsComponent } from './Components/ProductList/product-details/product-details.component';
import { AddNewProductComponent } from './Components/ProductList/add-new-product/add-new-product.component';
import { EditProductComponent } from './Components/ProductList/edit-product/edit-product.component';
import { AddProductWithAPIComponent } from './Components/ProductList/AddProductByusingAPI/add-product-with-api/add-product-with-api.component';
import { RegistrByReactiveFormsComponent } from './Components/RegisterByReactForm/registr-by-reactive-forms/registr-by-reactive-forms.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProductsComponent,
    SidebarComponent,
    BoxStyleDirective,
    BirthdayFromIDPipe,
    CurrencyPipePipe,
    CreditCardSplicePipe ,
    BirthdayFromIDPipe ,
    OrderDetailsComponent,
    ProductCardsComponent,
    MainRoutingComponent,
    LogInFormComponent,
    ProductDetailsComponent,
    AddNewProductComponent,
    EditProductComponent,
    AddProductWithAPIComponent,
    RegistrByReactiveFormsComponent,

  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
