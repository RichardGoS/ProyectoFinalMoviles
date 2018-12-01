import { TestBed } from '@angular/core/testing';

import { TarifasService } from './tarifas.service';

describe('TarifasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TarifasService = TestBed.get(TarifasService);
    expect(service).toBeTruthy();
  });
});
