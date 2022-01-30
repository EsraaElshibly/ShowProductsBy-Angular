import { Component, OnInit, ViewChild } from '@angular/core';
import { CategoryList } from 'src/app/ViewModels/categoryList';
import { IShopping } from 'src/app/ViewModels/ishopping';
import { ProductsComponent } from '../productsTable/products.component';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss'],
})
export class OrderDetailsComponent implements OnInit {
  categoryList: CategoryList[];
  selectedCatID: number = 0;

  // To show small table in page from big table
  // selectedCatFromPar : string = "" ;
  // Quantity : number = 0 
  // shopItems : IShopping[] = []
  // @ViewChild(ProductsComponent) prdComponent !: ProductsComponent

  constructor() {
    this.categoryList = [
      { ID: 1, name: 'Tablet' },
      { ID: 2, name: 'Phone' },
      { ID: 3, name: 'Labtop' },
    ];
  }

  ngOnInit(): void {}

  // chooseObjFromParent(objChosen: any)
  // {
  //   if (this.shopItems[0].prodQuantity === 0) {
  //     this.shopItems.pop()
  //   }
  //   this.shopItems.push(objChosen)
  // }
}
