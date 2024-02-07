import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputerPartsFormComponent } from './computer-parts-form.component';

describe('ComputerPartsFormComponent', () => {
  let component: ComputerPartsFormComponent;
  let fixture: ComponentFixture<ComputerPartsFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComputerPartsFormComponent]
    });
    fixture = TestBed.createComponent(ComputerPartsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
