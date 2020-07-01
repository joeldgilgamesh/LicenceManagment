import { TestBed } from '@angular/core/testing';

import { GestiondecleService } from './gestiondecle.service';

describe('GestiondecleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GestiondecleService = TestBed.get(GestiondecleService);
    expect(service).toBeTruthy();
  });
});
