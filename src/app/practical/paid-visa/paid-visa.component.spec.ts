import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaidVisaComponent } from './paid-visa.component';

describe('PaidVisaComponent', () => {
  let component: PaidVisaComponent;
  let fixture: ComponentFixture<PaidVisaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaidVisaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaidVisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
