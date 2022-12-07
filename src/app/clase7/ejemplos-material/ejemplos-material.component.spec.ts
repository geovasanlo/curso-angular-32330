import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjemplosMaterialComponent } from './ejemplos-material.component';

describe('EjemplosMaterialComponent', () => {
  let component: EjemplosMaterialComponent;
  let fixture: ComponentFixture<EjemplosMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EjemplosMaterialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EjemplosMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
