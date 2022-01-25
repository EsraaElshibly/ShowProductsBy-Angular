import {
  Component,
  OnInit,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import ProductData from '../../../ViewModels/product-data';
import { IProduct } from '../../../ViewModels/iproduct';
import { CategoryList, OffersDis } from '../../../ViewModels/categoryList';
import { Router } from '@angular/router';
import { ServicesProductComponentService } from '../../Services/ServicesProductComponent.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit, OnChanges {
  
  displayTable: boolean = true;
  @Input() categIdSentByParentComp: number = 0;
  filtered: any;
  discount: any = OffersDis.secDis;
  quan: number = 0;
  // selectedCatID:number = 0

  // Interface
  // categoryList: CategoryList[];
  // prodList: IProduct[];

  prodListMatchCategID: IProduct[] = [];
  
  constructor(
    private prodCompService : ServicesProductComponentService ,
    private router: Router
  ) 
  {
    

    // this.categoryList = [
    //   { ID: 1, name: 'Tablet' },
    //   { ID: 2, name: 'Phone' },
    //   { ID: 3, name: 'Labtop' },
    // ];

    // this.prodList = [
    //   {
    //     ID: 21,
    //     name: 'Tablet2020',
    //     quantity: 0,
    //     price: 1000,
    //     imageURL: 'https://picsum.photos/200',
    //     categoryID: 1,
    //   },
    //   {
    //     ID: 11,
    //     name: 'Tablet2021',
    //     quantity: 1,
    //     price: 10900,
    //     imageURL: 'https://picsum.photos/200',
    //     categoryID: 1,
    //   },
    //   {
    //     ID: 12,
    //     name: 'Apple Phone',
    //     quantity: 10,
    //     price: 10290,
    //     imageURL: 'https://picsum.photos/200',
    //     categoryID: 2,
    //   },
    //   {
    //     ID: 23,
    //     name: 'Phone2021',
    //     quantity: 1,
    //     price: 13000,
    //     imageURL: 'https://picsum.photos/200',
    //     categoryID: 2,
    //   },
    //   {
    //     ID: 33,
    //     name: 'Laptop2020',
    //     quantity: 80,
    //     price: 10500,
    //     imageURL: 'https://picsum.photos/200',
    //     categoryID: 3,
    //   },
    //   {
    //     ID: 130,
    //     name: 'Laptop2021',
    //     quantity: 0,
    //     price: 10800,
    //     imageURL: 'https://picsum.photos/200',
    //     categoryID: 3,
    //   },
    // ];

    // this.prodMatchCategID = this.prodList;
    // The abvious line to show table when page reload
  }

  ngOnInit(): void {
    this.prodListMatchCategID = this.prodCompService.getAllProductsList()
  }

  ngOnChanges() {
    // this.prodFiltered();
    this.prodListMatchCategID = this.prodCompService.getProdMatchsCategoryId(this.categIdSentByParentComp)
  }

  // changeCat(event: any) {
  //   let id = this.categoryList.find((i) => i.ID == event)
  //   console.log(id?.ID);

  //   this.filtered = this.prodList.filter((i) => i.ID === id?.ID)
  //   return this.filtered
  // }

  // Function to Buy any Product
  buyProduct() {
    // this.prodList[2].quantity -= 1;

    // for (let index in this.prodList)
    // {
    //   console.log(index);
    //   this.prodList[index].quantity -= 1

    // }
  }

  // Function to filter products and return prod that matches CatID
  // prodFiltered() {
  //   if (this.categIdSentByParentComp == 0) {
  //     this.prodMatchCategID = this.prodList;
  //     // The abvious line to show table when page reload
  //   } else {
  //     this.prodMatchCategID = this.prodList.filter(
  //       (prod) => prod.categoryID == this.categIdSentByParentComp
  //     );
  //   }
  // }

  // prodFiltered() {
    
  //     this.prodMatchCategID = this.prodList.filter(
  //       (prod) => prod.categoryID == this.selectedCatID
  //     );
    
  // }

}
