import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeRsComponent } from './make-rs.component';

describe('MakeRsComponent', () => {
  let component: MakeRsComponent;
  let fixture: ComponentFixture<MakeRsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakeRsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakeRsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
