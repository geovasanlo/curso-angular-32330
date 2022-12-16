import { TestBed } from '@angular/core/testing';

import { MiServicioService } from './mi-servicio.service';

describe('MiServicioService', () => {
  let service: MiServicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MiServicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
