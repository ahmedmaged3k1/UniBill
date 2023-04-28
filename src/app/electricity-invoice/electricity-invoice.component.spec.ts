import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectricityInvoiceComponent } from './electricity-invoice.component';

describe('ElectricityInvoiceComponent', () => {
  let component: ElectricityInvoiceComponent;
  let fixture: ComponentFixture<ElectricityInvoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectricityInvoiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElectricityInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
