import { Component, OnInit } from '@angular/core';
import { CategoryList } from 'src/app/ViewModels/categoryList';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent implements OnInit {

  categoryList : CategoryList [] ;
  selectedCatID:number= 0 ;
  
  constructor() {

    this.categoryList = [
      {ID: 1 , name: 'Tablet'  } ,
      {ID: 2 , name: 'Phone'  } ,
      {ID: 3 , name: 'Labtop'  }
    ]

   }

  ngOnInit(): void {
  }

}
