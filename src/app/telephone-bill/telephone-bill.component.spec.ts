import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelephoneBillComponent } from './telephone-bill.component';

describe('TelephoneBillComponent', () => {
  let component: TelephoneBillComponent;
  let fixture: ComponentFixture<TelephoneBillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelephoneBillComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelephoneBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
