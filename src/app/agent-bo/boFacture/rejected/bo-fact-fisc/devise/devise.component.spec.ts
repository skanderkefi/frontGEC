import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { fiscrjcDeviseComponent } from './devise.component';

describe('fiscrjcDeviseComponent', () => {
  let component: fiscrjcDeviseComponent;
  let fixture: ComponentFixture<fiscrjcDeviseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ fiscrjcDeviseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(fiscrjcDeviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
