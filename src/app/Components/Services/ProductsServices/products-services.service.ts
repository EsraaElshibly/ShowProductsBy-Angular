import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { IProduct } from 'src/app/ViewModels/iproduct';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductsServicesService {
  httpOptions;

  constructor(private httpClientServices: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
  }

  getAllProduct(): Observable<IProduct[]> {
    return this.httpClientServices.get<IProduct[]>(
      `${environment.apiURL}products`
    )
    .pipe(retry(3), catchError(this.handleError));
  }

  getProductByCatId(catId: number): Observable<IProduct[]> {
    return this.httpClientServices.get<IProduct[]>(
      `${environment.apiURL}products?categoryId = ${catId}`
    )
    .pipe(retry(3), catchError(this.handleError));
  }

  getProductByProdId(prodId: number): Observable<IProduct> {
    return this.httpClientServices.get<IProduct>(
      `${environment.apiURL}products/${prodId}`
    )
    .pipe(retry(3), catchError(this.handleError));
  }

  addProduct(newProdList: IProduct): Observable<IProduct> {
    // Simple way
    // return this.httpClientServices.post<IProduct>(
    //   `${environment.apiURL}products`,
    //   JSON.stringify(newProdList),
    //   this.httpOptions
    // );

    // Way By using pipe and handle error in request
    return this.httpClientServices
      .post<IProduct>(
        `${environment.apiURL}products`,
        JSON.stringify(newProdList),
        this.httpOptions
      )
      .pipe(retry(3), catchError(this.handleError));
  }

  // updateProduct(prodId: number, updateProdList: IProduct): Observable<IProduct> {
  //   return this.httpClientServices.put<IProduct>(`${environment.apiURL}products/${prodId}`, updateProdList, this.httpClientServices)
  //   .pipe(retry(3), catchError(this.handleError));
  // }

  deleteProduct(prodId: number): Observable<IProduct[]> {
    return this.httpClientServices.delete<IProduct[]>(`${environment.apiURL}products/${prodId}`)
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occured:', error.error);
    } else {
      console.error(
        `returned code from backend ${error.status} and error is:`,
        error.error
      );
    }
    return throwError(
      () => new Error('Sorry.. Something bad was happenning, Please Try again')
    );
  }
}
