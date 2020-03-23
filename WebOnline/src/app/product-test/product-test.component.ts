import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core'

@Component({
  selector: 'app-product-test',
  templateUrl: './product-test.component.html',
  styleUrls: ['./product-test.component.css']
})
export class ProductTestComponent implements OnInit {
  @Input() product;
  @Output() output = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  notify(price){
    window.alert(price);
  }

}