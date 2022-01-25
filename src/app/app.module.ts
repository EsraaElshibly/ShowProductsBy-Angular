import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { ProductsComponent } from './Components/ProductList/products/products.component';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
import { FormsModule } from '@angular/forms';
import { BoxStyleDirective } from './Components/Directives/box-style.directive';
import { CurrencyPipePipe } from './Components/Pipes/CurrencyPipe/currency-pipe.pipe';
import { CreditCardSplicePipe } from './Components/Pipes/Credit-Card-splice/CreditCardSplice.pipe';
import { BirthdayFromIDPipe } from './Components/Pipes/BirthdayPipe/birthday-from-id.pipe';
import { OrderDetailsComponent } from './Components/ProductList/order-details/order-details.component';
import { HomeComponent } from './Components/Home/Home.component';
import { ProductCardsComponent } from './Components/ProductList/ProductCards/ProductCards.component';

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
    ProductCardsComponent

  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
