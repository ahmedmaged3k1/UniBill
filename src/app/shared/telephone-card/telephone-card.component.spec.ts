import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelephoneCardComponent } from './telephone-card.component';

describe('TelephoneCardComponent', () => {
  let component: TelephoneCardComponent;
  let fixture: ComponentFixture<TelephoneCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelephoneCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelephoneCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
