import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { lcrjcDeviseComponent } from './devise.component';

describe('DeviseComponent', () => {
  let component: lcrjcDeviseComponent;
  let fixture: ComponentFixture<lcrjcDeviseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ lcrjcDeviseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(lcrjcDeviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
