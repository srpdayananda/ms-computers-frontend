import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ShoppingListRoutingModule } from './shopping-list-routing.module';
import { MatDialogModule } from '@angular/material/dialog';
import { ShoppingListViewComponent } from './components/shopping-list-view/shopping-list-view.component';
import { ShoppingCartListComponent } from './components/shopping-cart-list/shopping-cart-list.component';
import { ShoppingItemListComponent } from './components/shopping-item-list/shopping-item-list.component';
import { ShoppingItemComponent } from './components/shopping-item/shopping-item.component';
import { ShoppingCartItemComponent } from './components/shopping-cart-item/shopping-cart-item.component';


@NgModule({
  declarations: [
    ShoppingListViewComponent,
    ShoppingCartListComponent,
    ShoppingItemListComponent,
    ShoppingItemComponent,
    ShoppingCartItemComponent
  ],
  imports: [
    CommonModule,
    ShoppingListRoutingModule,
    MatDialogModule,
    FormsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ShoppingListModule { }
