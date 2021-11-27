import { TestBed } from '@angular/core/testing';

import { ReceptyService } from './recepty.service';

describe('ReceptyService', () => {
  let service: ReceptyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReceptyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
