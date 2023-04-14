import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingBillsComponent } from './pending-bills.component';

describe('PendingBillsComponent', () => {
  let component: PendingBillsComponent;
  let fixture: ComponentFixture<PendingBillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PendingBillsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PendingBillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
