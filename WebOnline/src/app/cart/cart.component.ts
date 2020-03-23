import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items
  //定义一个表单模型
  checkOutForm
  constructor(
    private cartService : CartService,
    private formBuilder : FormBuilder,
  ) {   
    this.checkOutForm = this.formBuilder.group({
      name : '',
     tel : ''
    });
  }

  ngOnInit() {
    this.items = this.cartService.getItems();
  }

  onSubmit(data){
    this.items = this.cartService.clearCart();
    this.checkOutForm.reset();
    console.warn('订单已经提交' + data.name);
  }

}