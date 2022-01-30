import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from 'src/app/ViewModels/iproduct';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsServicesService {

  constructor(
    private httpClientServices: HttpClient
  ) {}
   
    getAllProduct():Observable<IProduct[]>
    {
      return this.httpClientServices.get<IProduct[]>(`${environment.apiURL}products`)
    }

    getProductByCatId(catId: number):Observable<IProduct[]>
    {
      return this.httpClientServices.get<IProduct[]>(`${environment.apiURL}products?categoryId = ${catId}`)
    }

    getProductByProdId(prodId: number):Observable<IProduct>
    {
      return this.httpClientServices.get<IProduct>(`${environment.apiURL}products/${prodId}`) 
    }

    addProduct(newProdList: IProduct)
    {
      
    }

    updateProduct(prodId: number, updateProdList: IProduct)
    {
      
    }

    deleteProduct(prodId: number)
    {

    }
  
}
