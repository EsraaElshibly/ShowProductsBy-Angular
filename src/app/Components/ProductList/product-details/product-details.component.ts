import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicesProductComponentService } from '../../Services/ServicesProductComponent.service';
import { IProduct } from 'src/app/ViewModels/iproduct';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  arrayOfProductsId : number[]=[]
  productCurrentId:number=0;
  prdList : IProduct | undefined=undefined

  constructor(
    private prodCompService: ServicesProductComponentService,
    private router: Router ,
    private activeRouter : ActivatedRoute ,
    private loc : Location ,
  ) { }

  ngOnInit(): void {
    this.arrayOfProductsId = this.prodCompService.returnProductId()

    this.activeRouter.paramMap.subscribe((paramMap)=>{
      this.productCurrentId = Number(paramMap.get('prodId'));
      this.prdList = this.prodCompService.reciveProductByItsID(this.productCurrentId);
    });
  }

  returnBack()
  {
    return this.loc.back()
  }

  goToPreviousProduct ()
  {
    let indexOfCurrentProd ,
        previousIndexOfProd ;
    
     indexOfCurrentProd = this.arrayOfProductsId.findIndex((item) => item == this.productCurrentId)

     if (indexOfCurrentProd > 0)
     {
       previousIndexOfProd = this.arrayOfProductsId[indexOfCurrentProd-1]
       this.router.navigate(['/Products' , previousIndexOfProd])
     }


  }

   goToNextProduct ()
  {
    let indexOfCurrentProd ,
        nextIndexOfProd ;
    
     indexOfCurrentProd = this.arrayOfProductsId.findIndex((item) => item == this.productCurrentId)

     if (indexOfCurrentProd < this.arrayOfProductsId.length)
     {
       nextIndexOfProd = this.arrayOfProductsId[indexOfCurrentProd + 1]
       this.router.navigate(['/Products' , nextIndexOfProd])
     }


  }

}
