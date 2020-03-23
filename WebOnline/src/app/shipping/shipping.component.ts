import { Component, OnInit } from '@angular/core';
//导入购物车服务。
import { CartService } from '../cart.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {
  shippingItems;
  constructor(
    private cartService : CartService
  ) { }

  ngOnInit() {
    this.shippingItems = this.cartService.getShippingPrices();
  }

}