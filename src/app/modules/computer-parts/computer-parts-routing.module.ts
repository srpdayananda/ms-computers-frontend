import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComputerPartsViewComponent } from './components/computer-parts-view/computer-parts-view.component';

const routes: Routes = [
  { path: '', component: ComputerPartsViewComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComputerPartsRoutingModule { }
