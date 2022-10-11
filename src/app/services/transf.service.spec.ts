import { TestBed } from '@angular/core/testing';

import { TransfService } from './transf.service';

describe('TransfService', () => {
  let service: TransfService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransfService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
