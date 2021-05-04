import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { openvDeviseComponent } from './devise.component';

describe('DeviseComponent', () => {
  let component: openvDeviseComponent;
  let fixture: ComponentFixture<openvDeviseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ openvDeviseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(openvDeviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
