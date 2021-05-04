import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { certcrDeviseComponent } from './devise.component';

describe('DeviseComponent', () => {
  let component: certcrDeviseComponent;
  let fixture: ComponentFixture<certcrDeviseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ certcrDeviseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(certcrDeviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
