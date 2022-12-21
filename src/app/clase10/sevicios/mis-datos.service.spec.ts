import { TestBed } from '@angular/core/testing';

import { MisDatosService } from './mis-datos.service';

describe('MisDatosService', () => {
  let service: MisDatosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MisDatosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
