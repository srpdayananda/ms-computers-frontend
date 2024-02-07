import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/shopping-list', pathMatch: 'full'},
  {
    path: 'shopping-list',
    loadChildren: () =>
    import('./modules/shopping-list/shopping-list.module').then((m) => m.ShoppingListModule)
  },
  {
    path: 'computer-parts',
    loadChildren: () =>
    import('./modules/computer-parts/computer-parts.module').then((m) => m.ComputerPartsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
