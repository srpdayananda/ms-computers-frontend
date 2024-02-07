import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputerPartsViewComponent } from './computer-parts-view.component';

describe('ComputerPartsViewComponent', () => {
  let component: ComputerPartsViewComponent;
  let fixture: ComponentFixture<ComputerPartsViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComputerPartsViewComponent]
    });
    fixture = TestBed.createComponent(ComputerPartsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
