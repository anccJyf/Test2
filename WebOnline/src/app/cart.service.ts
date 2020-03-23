import { Injectable } from '@angular/core';
//既然已经AppModule导入HttpClientModule，下一步就是将HttpClient服务注入到您的服务中，这样您的应用程序就可以获取数据并与外部API和资源进行交互。
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn : 'root'
})
export class CartService {

  constructor(
    private httpClient : HttpClient
  ) { }

  items = [];

  addToCart(product){
    this.items.push(product);
  }

  getItems(){
    return this.items;
  }

  clearCart(){
    this.items = [];
    return this.items;
  }

  getShippingPrices(){
    return this.httpClient.get('/assets/shipping.json');
  }

}