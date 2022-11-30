import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbueloComponent } from './abuelo.component';

describe('AbueloComponent', () => {
  let component: AbueloComponent;
  let fixture: ComponentFixture<AbueloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbueloComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbueloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
