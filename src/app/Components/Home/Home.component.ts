import { Component, OnInit } from '@angular/core';
import ProductData from 'src/app/ViewModels/product-data';

@Component({
  selector: 'app-Home',
  templateUrl: './Home.component.html',
  styleUrls: ['./Home.component.scss']
})
export class HomeComponent implements OnInit {

  firstProductInfo: ProductData;
  secProdIcfo: ProductData;
  thirdProdInfo: ProductData;

  // For Pipe
  year: string = '' ;
  cardFormatNum : string = ''
  
  constructor() { 
    this.firstProductInfo = new ProductData(
      'First-Product',
      ['cairo', 'Aswan', 'Alex', 'Ismalia'],
      'https://picsum.photos/200'
    );

    this.secProdIcfo = new ProductData(
      'Second-Product',
      ['Luxor', 'Benha', 'Maadi', 'October'],
      'https://picsum.photos/200'
    );

    this.thirdProdInfo = new ProductData(
      'Third-Product',
      ['Dummiat', 'Mansoura', 'Shobra', 'Ismalia'],
      'https://picsum.photos/200'
    );
  }

  ngOnInit() {
  }

  // Function for pipe in button
  getBirthDayFromID (value: string) 
  {
    this.year = value
  }

  formatCreditNum(value: string)
  {
    this.cardFormatNum = value
  }
}
