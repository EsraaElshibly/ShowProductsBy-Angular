import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IProduct } from 'src/app/ViewModels/iproduct';
import { ProductsServicesService } from '../../Services/ProductsServices/products-services.service';
import { ServicesProductComponentService } from '../../Services/ServicesProductComponent.service';

@Component({
  selector: 'app-ProductCards',
  templateUrl: './ProductCards.component.html',
  styleUrls: ['./ProductCards.component.scss'],
})
export class ProductCardsComponent implements OnInit {
  prodListMatchCategID: IProduct[] = [];
  @Input() categIdSentByParentComp: number = 0;

  constructor(
    // To get data static UnComment line below
    // private prodCompService: ServicesProductComponentService,

    // To get data Dynamic by Api using line below
    private prodComSer: ProductsServicesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // To get data static using line below
    // this.prodListMatchCategID = this.prodCompService.getAllProductsList();

    // To get data Dynamic by Api using line below
    this.prodComSer.getAllProduct().subscribe((prod) => {
      this.prodListMatchCategID = prod;
    });
  }

  ngOnChanges() {
    // To get data static using line below
    // this.prodListMatchCategID = this.prodCompService.getProdMatchsCategoryId(
    //   this.categIdSentByParentComp);

    // To get data Dynamic by Api using line below
    this.prodComSer
      .getProductByCatId(this.categIdSentByParentComp)
      .subscribe((prod) => {
        this.prodListMatchCategID = prod;
      });
  }
}
