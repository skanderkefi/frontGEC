import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { certdeviseDeviseComponent } from './devise.component';

describe('DeviseComponent', () => {
  let component: certdeviseDeviseComponent;
  let fixture: ComponentFixture<certdeviseDeviseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ certdeviseDeviseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(certdeviseDeviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
