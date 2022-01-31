import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsServicesService } from 'src/app/Components/Services/ProductsServices/products-services.service';
import { CategoryList } from 'src/app/ViewModels/categoryList';
import { IProduct } from 'src/app/ViewModels/iproduct';

@Component({
  selector: 'app-add-product-with-api',
  templateUrl: './add-product-with-api.component.html',
  styleUrls: ['./add-product-with-api.component.scss']
})
export class AddProductWithAPIComponent implements OnInit {

  // catList: ICategory[];
  newProduct: IProduct= {} as IProduct;
  categoryList: CategoryList[];

  constructor(private prodService: ProductsServicesService
    , private router: Router) {
      this.categoryList = [
        { ID: 1, name: 'Tablet' },
        { ID: 2, name: 'Phone' },
        { ID: 3, name: 'Labtop' },
      ];
     }

  ngOnInit(): void {
  }

  addProduct() {

    const observer={
      next: (prd:IProduct) => {
        alert("Product added Successfuly"); 
        
        this.router.navigateByUrl('/ProdCard');
      },
      error: (err:Error)=>{alert(err.message)}
    }

    this.prodService.addProduct(this.newProduct).subscribe(observer);
  }

}