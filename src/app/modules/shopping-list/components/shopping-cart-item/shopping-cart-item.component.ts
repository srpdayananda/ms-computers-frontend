import { Component, Input, OnInit } from '@angular/core';
import { ShoppingItem } from '../../model/shopping-list';

@Component({
  selector: 'app-shopping-cart-item',
  templateUrl: './shopping-cart-item.component.html',
  styleUrls: ['./shopping-cart-item.component.scss']
})
export class ShoppingCartItemComponent implements OnInit {
@Input() item: ShoppingItem | undefined;
fallbackImageUrl: string = '../../../../../assets/img/laptop.png';

  constructor() {}

  ngOnInit(): void {

  }

  onImageError(event: Event) {
    // Handle the image error, e.g., set a fallback image
    (event.target as HTMLImageElement).src = this.fallbackImageUrl;
  }

}
