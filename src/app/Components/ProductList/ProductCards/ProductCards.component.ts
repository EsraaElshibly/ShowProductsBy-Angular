import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IProduct } from 'src/app/ViewModels/iproduct';
import { ServicesProductComponentService } from '../../Services/ServicesProductComponent.service';

@Component({
  selector: 'app-ProductCards',
  templateUrl: './ProductCards.component.html',
  styleUrls: ['./ProductCards.component.scss'],
})
export class ProductCardsComponent implements OnInit {
  prodListMatchCategID: IProduct[] = [];
  categIdSentByParentComp: number = 0;

  constructor(
    private prodCompService: ServicesProductComponentService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.prodListMatchCategID = this.prodCompService.getAllProductsList();
  }

  ngOnChanges() {
    this.prodListMatchCategID = this.prodCompService.getProdMatchsCategoryId(
      this.categIdSentByParentComp
    );
  }
}
