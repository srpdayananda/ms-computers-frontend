import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingListViewComponent } from './components/shopping-list-view/shopping-list-view.component';

const routes: Routes = [
  { path: '', component: ShoppingListViewComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShoppingListRoutingModule { }
