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
import { BirthdayFromIDPipe } from './Components/Pipes/BirthdayPipe/birthday-from-id.pipe';
import { CurrencyPipePipe } from './Components/Pipes/CurrencyPipe/currency-pipe.pipe';
import { OrderDetailsComponent } from './Components/ProductList/order-details/order-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductsComponent,
    SidebarComponent,
    BoxStyleDirective,
    BirthdayFromIDPipe,
    CurrencyPipePipe,
    OrderDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule ,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
