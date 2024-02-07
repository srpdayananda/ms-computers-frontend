import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ShoppingItem } from '../../model/shopping-list';
import { ComputerPartsService } from 'src/app/modules/computer-parts/services/computer-parts.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-shopping-item-list',
  templateUrl: './shopping-item-list.component.html',
  styleUrls: ['./shopping-item-list.component.scss']
})
export class ShoppingItemListComponent implements OnInit {
  @Output() cartList: any = new EventEmitter<any>();
  shoppingItems: ShoppingItem[] = [];
  shoppingCartList: ShoppingItem[] = [];

  constructor(
    private computerPartService: ComputerPartsService,
    private toastr: ToastrService
  ) {

  }

  ngOnInit(): void {
    this.getShoppingItems();
  }

  onShoppingCartItems(event: any) {
    this.shoppingCartList.push(event);
    this.cartList.emit(this.shoppingCartList);
  }

getShoppingItems() {
    this.computerPartService.getShoppingItems().subscribe((res:any) => {
      this.shoppingItems = res;
    })
  }

}
