import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NietoUnoComponent } from './nieto-uno.component';

describe('NietoUnoComponent', () => {
  let component: NietoUnoComponent;
  let fixture: ComponentFixture<NietoUnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NietoUnoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NietoUnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
