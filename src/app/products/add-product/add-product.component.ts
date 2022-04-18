import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
  host:{
    class:'container mt-5'
  }
})
export class AddProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
