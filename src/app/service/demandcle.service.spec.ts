import { TestBed } from '@angular/core/testing';

import { DemandcleService } from './demandcle.service';

describe('DemandcleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DemandcleService = TestBed.get(DemandcleService);
    expect(service).toBeTruthy();
  });
});
