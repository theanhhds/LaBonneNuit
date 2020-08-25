import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckReservationComponent } from './check-reservation.component';

describe('CheckReservationComponent', () => {
  let component: CheckReservationComponent;
  let fixture: ComponentFixture<CheckReservationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckReservationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
