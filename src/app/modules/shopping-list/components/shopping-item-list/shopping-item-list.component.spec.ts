import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingItemListComponent } from './shopping-item-list.component';

describe('ShoppingItemListComponent', () => {
  let component: ShoppingItemListComponent;
  let fixture: ComponentFixture<ShoppingItemListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShoppingItemListComponent]
    });
    fixture = TestBed.createComponent(ShoppingItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
