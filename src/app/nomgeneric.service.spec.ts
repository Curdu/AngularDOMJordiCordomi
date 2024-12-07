import { TestBed } from '@angular/core/testing';

import { NomgenericService } from './nomgeneric.service';

describe('NomgenericService', () => {
  let service: NomgenericService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NomgenericService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
