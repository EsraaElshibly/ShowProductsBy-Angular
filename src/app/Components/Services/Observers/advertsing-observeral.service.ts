import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdvertsingObserveralService {
  private advertisingObserve: string[];

  constructor() {
    this.advertisingObserve = [
      "Sale Up To 70%",
      "Winter Sale up to 30%",
      "Black Friday Sale",
      "Check our last season sale",
    ];
  }

  makeTimeBetweenAdvertising(timeInSec: number): Observable<string> {
    return new Observable <string>((observerParam) => {
      let startTimer = 0
      let advertisingTimer = setInterval(() => {
        
          // each comp which show obserce and subscribe it understand that there is upcoming adver
          

          if (startTimer == this.advertisingObserve.length) 
          {
            observerParam.complete();
          } 
  
          //  Handle Error
          if (this.advertisingObserve[startTimer] == '') {
            observerParam.error('There are Empty String');
          }

          observerParam.next(this.advertisingObserve[startTimer]);
          startTimer++;

        }, timeInSec * 1000);

        return {
          unsubscribe(){
            // Stop Interval
            clearInterval(advertisingTimer)
            console.log('Interval is decleared');
            
          }
        }
    });
  }
}
