import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import ProductData from 'src/app/ViewModels/product-data';
import { AdvertsingObserveralService } from '../Services/Observers/advertsing-observeral.service';

@Component({
  selector: 'app-Home',
  templateUrl: './Home.component.html',
  styleUrls: ['./Home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  firstProductInfo: ProductData;
  secProdIcfo: ProductData;
  thirdProdInfo: ProductData;

  // For Pipe
  year: string = '';
  cardFormatNum: string = '';

  // For Showing Advertising
  private advertisSubscription !: Subscription

  constructor(
    // injection for shoeing Advertising
    private advertising: AdvertsingObserveralService
  ) {
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
    // For Showing Advertising

    this.advertisSubscription = this.advertising.makeTimeBetweenAdvertising(2).subscribe(
      {
        next: (data: string) => {console.log(data)} ,
  
        error: (error: string) => {console.log(error)} ,
  
        complete: () => {
          console.log('Advertising is completed');
        },
      }
    );
    // this.advertisSubscription.unsubscribe()
  }

  ngOnDestroy(): void {
    this.advertisSubscription.unsubscribe()
  }

  // Function for pipe in button
  getBirthDayFromID(value: string) {
    this.year = value;
  }

  formatCreditNum(value: string) {
    this.cardFormatNum = value;
  }
}
