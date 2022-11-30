import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HijoUnoComponent } from './hijo-uno.component';

describe('HijoUnoComponent', () => {
  let component: HijoUnoComponent;
  let fixture: ComponentFixture<HijoUnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HijoUnoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HijoUnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
