import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ventrjcDeviseComponent } from './devise.component';

describe('ventrjcDeviseComponent', () => {
  let component: ventrjcDeviseComponent;
  let fixture: ComponentFixture<ventrjcDeviseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ventrjcDeviseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ventrjcDeviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
