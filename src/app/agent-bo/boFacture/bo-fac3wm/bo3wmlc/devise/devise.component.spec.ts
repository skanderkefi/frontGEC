import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { lccrDeviseComponent } from './devise.component';

describe('DeviseComponent', () => {
  let component: lccrDeviseComponent;
  let fixture: ComponentFixture<lccrDeviseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ lccrDeviseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(lccrDeviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
