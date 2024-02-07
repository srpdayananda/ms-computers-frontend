import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ShoppingItem } from 'src/app/modules/shopping-list/model/shopping-list';
import { ComputerPartsService } from '../../services/computer-parts.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-computer-parts-form',
  templateUrl: './computer-parts-form.component.html',
  styleUrls: ['./computer-parts-form.component.scss'],
})
export class ComputerPartsFormComponent implements OnInit {
  computerPartForm!: FormGroup;
  @Input() computerPart: any;
  @Input() isEditMode!: boolean;
  @Output() isFormViewOpen: any = new EventEmitter<boolean>(true);
  isSubmitted: boolean = false;
  imageUrl: any;
  fallbackImageUrl: string = '../../../../../assets/img/broken-image.png';

  constructor(
    private fb: FormBuilder,
    private computerPartService: ComputerPartsService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    if (this.isEditMode) {
      this.initForm();
      this.populateForm(this.computerPart);
    } else {
      this.initForm();
    }
  }

  get pForm() {
    return this.computerPartForm.controls;
  }

  private initForm() {
    this.computerPartForm = this.fb.group({
      id: [0],
      name: ['', Validators.required],
      description: [''],
      img: [''],
      quantity: [0, [Validators.required, Validators.min(0)]],
      price: [0, [Validators.required, Validators.min(0)]],
    });
  }

  onSubmit() {
    this.isSubmitted = true;
    if (this.computerPartForm.valid) {
      const formData = this.computerPartForm.value;

      if (this.isEditMode) {
        //Edit part
        this.computerPartService.updateShoppingItem(formData)
          .subscribe((res: any) => {
            this.toastr.success('Computer Parts updated successfully');
            this.isFormViewOpen.emit(false);
            // Reset the form after submission
            this.computerPartForm.reset();
          })
      } else {
        //create part
        this.computerPartService.createShoppingItem(formData)
          .subscribe((res: any) => {
            this.toastr.success('Computer Parts added successfully');
            this.isFormViewOpen.emit(false);
            // Reset the form after submission
            this.computerPartForm.reset();
          });
      }
    } else {
      // Handle invalid form
    }
  }

  populateForm(computerPart: ShoppingItem) {
    this.computerPartForm.patchValue({
      id: computerPart?.id,
      name: computerPart?.name,
      description: computerPart?.description,
      img: computerPart?.img,
      quantity: computerPart?.quantity,
      price: computerPart?.price,
    });

    //set imageUrl
    this.imageUrl = computerPart?.img;
  }

  onCancelHandler() {
    this.isFormViewOpen.emit(false);
  }

  updateImageUrl(event: Event) {
    // Update the imageUrl when the input changes
    this.imageUrl = (event.target as HTMLInputElement).value;
  }

  onImageError(event: Event) {
    // Handle the image error, e.g., set a fallback image
    (event.target as HTMLImageElement).src = this.fallbackImageUrl;
  }
}
