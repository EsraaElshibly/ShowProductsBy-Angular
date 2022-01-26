import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ServicesProductComponentService } from '../../Services/ServicesProductComponent.service';

@Component({
  selector: 'app-add-new-product',
  templateUrl: './add-new-product.component.html',
  styleUrls: ['./add-new-product.component.scss']
})
export class AddNewProductComponent implements OnInit {

  newProdList: any 
  @ViewChild('IDp') changeID !:ElementRef
  @ViewChild('prdName') changeName !:ElementRef
  @ViewChild('prdQuan') changeQuan !:ElementRef
  @ViewChild('prdPrice') changePrice !:ElementRef
  @ViewChild('prdImg') changeImg !:ElementRef

  constructor(
    private productServices : ServicesProductComponentService
  ) { }

  ngOnInit(): void {
  }

  addNewProduct(IDp: string, nameProd: string, quanPrpd: string, priceProd: string, imgPro: string)
  {
    this.newProdList = {
      ID: Number(IDp),
      name: nameProd,
      quantity: Number(quanPrpd),
      price: Number(priceProd),
      imageURL: imgPro,
    }

    this.productServices.addNewProduct(this.newProdList) 
    this.clearInput()
  }

  clearInput()
  {
    this.changeID.nativeElement.value = ''
    this.changeName.nativeElement.value = ''
    this.changeQuan.nativeElement.value = ''
    this.changePrice.nativeElement.value = ''
    this.changeImg.nativeElement.value = ''
  }
}
