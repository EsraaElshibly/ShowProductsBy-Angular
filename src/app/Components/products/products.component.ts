import { Component, OnInit } from '@angular/core';
import ProductData from '../../ViewModels/product-data' ;
import {IProduct} from '../../ViewModels/iproduct' ;
import {CategoryList} from '../../ViewModels/categoryList'
import {OffersDis} from '../../ViewModels/categoryList'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  firstProductInfo: ProductData ; 
  secProdIcfo : ProductData ;
  thirdProdInfo : ProductData ;
  displayTable:boolean= true ;
  selectedCatID:number= 0 ;
  filtered: any ;
  discount:any = OffersDis.secDis ;
  quan: number= 0 ;

  // Interface
  prodList : IProduct [];
  categoryList : CategoryList [] ;
  prodMatchCategID : IProduct [] = [] ;
  

  constructor() { 
    this.firstProductInfo = new ProductData('First-Product' , ['cairo' , 'Aswan' , 'Alex' , 'Ismalia'] , 'https://picsum.photos/200' )

    this.secProdIcfo = new ProductData('Second-Product' , ['Luxor' , 'Benha' , 'Maadi' , 'October'] , 'https://picsum.photos/200' )

    this.thirdProdInfo = new ProductData('Third-Product' , ['Dummiat' , 'Mansoura' , 'Shobra' , 'Ismalia'] , 'https://picsum.photos/200' )

    this.prodList = [
      {ID: 11 , name: 'Tablet2020' , quantity:0 , price: 1000 , imageURL: 'https://picsum.photos/200' , categoryID: 1 } ,
      {ID: 100 , name: 'Tablet2021' , quantity:1 , price: 10900 , imageURL: 'https://picsum.photos/200' , categoryID: 1 } ,
      {ID: 92 , name: 'Apple Phone' , quantity:10 , price: 10290 , imageURL: 'https://picsum.photos/200' , categoryID: 2 } ,
      {ID: 42 , name: 'Phone2021' , quantity:1 , price: 13000 , imageURL: 'https://picsum.photos/200' , categoryID: 2 } ,
      {ID: 35 , name: 'Laptop2020' , quantity:80 , price: 10500 , imageURL: 'https://picsum.photos/200' , categoryID: 3 } ,
      {ID: 83 , name: 'Laptop2021' , quantity:0 , price: 10800 , imageURL: 'https://picsum.photos/200' , categoryID: 3 }
    ]

    this.categoryList = [
      {ID: 1 , name: 'Tablet'  } ,
      {ID: 2 , name: 'Phone'  } ,
      {ID: 3 , name: 'Labtop'  }
    ]

    this.prodMatchCategID = this.prodList
    // The abvious line to show table when page reload

  }

  // changeCat(event: any) {
  //   let id = this.categoryList.find((i) => i.ID == event)
  //   console.log(id?.ID);
    
  //   this.filtered = this.prodList.filter((i) => i.ID === id?.ID)
  //   return this.filtered
  // }

  // Function to Buy any Product 
  buyProduct(quan:number) :number {
    console.log(--quan);
    
    return --quan 
  }

// Function to filter products and return prod that matches CatID
  prodFiltered()
  {
    this.prodMatchCategID = this.prodList.filter(prod => prod.categoryID == this.selectedCatID)
  }

  ngOnInit(): void {
  }

}
