import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShoppingItem } from 'src/app/modules/shopping-list/model/shopping-list';
import { ComputerPartsService } from '../../services/computer-parts.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-computer-parts-view',
  templateUrl: './computer-parts-view.component.html',
  styleUrls: ['./computer-parts-view.component.scss']
})
export class ComputerPartsViewComponent implements OnInit {
  computerParts:ShoppingItem[] = [];
  isFormViewOpen: boolean = false;
  editItemDetails: any;
  isEditMode: boolean = false;

  constructor(
    private router: Router,
    private computerPartService: ComputerPartsService,
    private toastr: ToastrService
    ) {

  }

  ngOnInit(): void {
    this.getShoppingItems();
  }

  getShoppingItems() {
    this.computerPartService.getShoppingItems().subscribe((res:any) => {
      this.computerParts = res;
    })
  }

  onAddNewItem() {
    this.isFormViewOpen = true;
    this.isEditMode = false;
  }

  onEditItem(item: ShoppingItem) {
    this.editItemDetails = item;
    this.isFormViewOpen = true;
    this.isEditMode = true;
  }

  onDeleteItem(item: ShoppingItem) {
    this.computerPartService.deleteShoppingItem(item).subscribe((res: any) => {
      this.toastr.success('Computer Part Delete successfully');
      this.getShoppingItems();
    })
  }

  onCancelHandler(event:boolean) {
    this.isFormViewOpen = event;
    this.getShoppingItems();
  }

}
