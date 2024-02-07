import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ComputerPartsRoutingModule } from './computer-parts-routing.module';
import { ComputerPartsViewComponent } from './components/computer-parts-view/computer-parts-view.component';
import { ComputerPartsFormComponent } from './components/computer-parts-form/computer-parts-form.component';


@NgModule({
  declarations: [
    ComputerPartsViewComponent,
    ComputerPartsFormComponent
  ],
  imports: [
    CommonModule,
    ComputerPartsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ComputerPartsModule { }
