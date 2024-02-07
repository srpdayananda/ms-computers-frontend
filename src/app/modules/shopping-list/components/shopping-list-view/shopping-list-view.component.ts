import { Component, OnInit } from '@angular/core';
import { ShoppingItem } from '../../model/shopping-list';

@Component({
  selector: 'app-shopping-list-view',
  templateUrl: './shopping-list-view.component.html',
  styleUrls: ['./shopping-list-view.component.scss']
})
export class ShoppingListViewComponent implements OnInit {
  cartList:ShoppingItem[] = [];
  subTotal: number = 0;

  constructor() {}

  ngOnInit(): void {

  };

  onCartList(event: any) {
    let total = 0;
    this.cartList = event;

    //calculation part
    if(this.cartList?.length > 0) {
      this.cartList.forEach(element => {
        total += element?.price * element?.quantity
      });
    }

    this.subTotal = total;
  }

}
