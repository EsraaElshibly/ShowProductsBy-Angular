import { Injectable } from '@angular/core';
import { IProduct } from 'src/app/ViewModels/iproduct';


@Injectable({
  providedIn: 'root',
})
export class ServicesProductComponentService {
  prodList: IProduct[];

  constructor() {
    this.prodList = [
      {
        ID: 11,
        name: 'Tablet2020',
        quantity: 0,
        price: 1000,
        imageURL: 'https://picsum.photos/200',
        categoryID: 1,
      },
      {
        ID: 100,
        name: 'Tablet2021',
        quantity: 1,
        price: 10900,
        imageURL: 'https://picsum.photos/200',
        categoryID: 1,
      },
      {
        ID: 92,
        name: 'Apple Phone',
        quantity: 10,
        price: 10290,
        imageURL: 'https://picsum.photos/200',
        categoryID: 2,
      },
      {
        ID: 42,
        name: 'Phone2021',
        quantity: 1,
        price: 13000,
        imageURL: 'https://picsum.photos/200',
        categoryID: 2,
      },
      {
        ID: 35,
        name: 'Laptop2020',
        quantity: 80,
        price: 10500,
        imageURL: 'https://picsum.photos/200',
        categoryID: 3,
      },
      {
        ID: 83,
        name: 'Laptop2021',
        quantity: 0,
        price: 10800,
        imageURL: 'https://picsum.photos/200',
        categoryID: 3,
      },
    ];
  }

  getAllProductsList(): IProduct[] {
    return this.prodList;
  }

  //get product by his id
  reciveProductByItsID(prodId: number) {
    let selecteProddId = this.prodList.find((prod) => prod.ID == prodId);
    return selecteProddId;
  }

  returnProductId(): number[] {
    let productId: number[] = this.prodList.map((prod) => prod.ID);
    return productId;
  }

  //get product that matches selected categogry id
  getProdMatchsCategoryId(categId: number): IProduct[] {
    if (categId == 0) {
      return this.prodList;
    } else {
      let selectedProd = this.prodList.filter(
        (prod) => prod.categoryID == categId
      );
      return selectedProd;
    }
  }

  addNewProduct(product: IProduct) {
    this.prodList.push(product);
  }

  getProdBySpecificId(id: number): IProduct | null {
    let product = this.prodList.find((prod) => prod.ID == id);
    return product ? product : null;
  }

  updateProductByServices(updateProdList: IProduct) {
    for (let i in this.prodList) {
      if (this.prodList[i].ID == updateProdList.ID) {
        this.prodList[i] = updateProdList;
      }
    }
  }
}
