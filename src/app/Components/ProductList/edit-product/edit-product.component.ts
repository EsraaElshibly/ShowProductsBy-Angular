import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/ViewModels/iproduct';
import { ServicesProductComponentService } from '../../Services/ServicesProductComponent.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit,AfterViewInit {

  updateProdList: IProduct|null={} as IProduct
  prodSent: IProduct|null={} as IProduct
  ID:number = 0
  @ViewChild('IDp') changeID !:ElementRef
  @ViewChild('prdName') changeName !:ElementRef
  @ViewChild('prdQuan') changeQuan !:ElementRef
  @ViewChild('prdPrice') changePrice !:ElementRef
  @ViewChild('prdImg') changeImg !:ElementRef

  constructor(
    private prodCompService: ServicesProductComponentService,
    private router: Router ,
    private activeRouter : ActivatedRoute ,
  ) { }
  ngAfterViewInit(): void {
    if(this.ID > 0)
    {
      this.updateProduct()
    }
  }

  ngOnInit(): void {
    this.activeRouter.paramMap.subscribe((paramMap) => {
      this.ID = Number(paramMap.get('id'))
      console.log(this.ID)

      this.updateProdList = this.prodCompService.getProdBySpecificId(this.ID)
      console.log(this.updateProdList)

    })
  }


  EditProduct(IDp:string, nameProd:string, quanPrpd:string, priceProd:string, imgPro:string)
  {
   this.prodSent = {
     ID : Number(IDp),
     name: nameProd,
     quantity: Number(quanPrpd), 
     price: Number(priceProd),
     imageURL: imgPro
   } 

   this.prodCompService.updateProductByServices(this.prodSent)
   this.clearInput()
  }

  private clearInput()
  {
    this.changeID.nativeElement.value = ''
    this.changeName.nativeElement.value = ''
    this.changeQuan.nativeElement.value = ''
    this.changePrice.nativeElement.value = ''
    this.changeImg.nativeElement.value = ''
  }

  private updateProduct()
  {
    this.changeID.nativeElement.value = this.updateProdList?.ID
    this.changeName.nativeElement.value = this.updateProdList?.name
    this.changeQuan.nativeElement.value = this.updateProdList?.quantity
    this.changePrice.nativeElement.value = this.updateProdList?.price
    this.changeImg.nativeElement.value = this.updateProdList?.imageURL
  }

}
