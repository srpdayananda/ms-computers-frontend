import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ShoppingItem } from '../../model/shopping-list';

@Component({
  selector: 'app-shopping-item',
  templateUrl: './shopping-item.component.html',
  styleUrls: ['./shopping-item.component.scss'],
})
export class ShoppingItemComponent implements OnInit {
  @Input() shoppingItem: ShoppingItem | undefined;
  quantityCount: number = 1;
  @Output() shoppingCartItems: any = new EventEmitter<any>();
  imageUrl: any;
  fallbackImageUrl: string = '../../../../../assets/img/laptop.png';

  constructor() {}

  ngOnInit(): void {}

  onQuantityAction(type: string) {
    if (type == 'add') {
      this.quantityCount++;
    } else if (type == 'remove') {
      if (this.quantityCount > 1) {
        this.quantityCount--;
      }
    }
  }

  addToCart(item: ShoppingItem | undefined, quantityCount: number) {
    if(item) {
      let newItem: ShoppingItem = {
        name: item.name,
        img: item.img,
        quantity: quantityCount,
        price: item.price,
        isSold: true,
        total: item.price * quantityCount
      };

      //add shopping list
      this.shoppingCartItems.emit(newItem);
    }
  }

  onImageError(event: Event) {
    // Handle the image error, e.g., set a fallback image
    (event.target as HTMLImageElement).src = this.fallbackImageUrl;
  }
}
