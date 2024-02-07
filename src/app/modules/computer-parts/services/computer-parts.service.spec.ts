import { TestBed } from '@angular/core/testing';

import { ComputerPartsService } from './computer-parts.service';

describe('ComputerPartsService', () => {
  let service: ComputerPartsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComputerPartsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
