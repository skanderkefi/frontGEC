import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { operrjcDeviseComponent } from './devise.component';

describe('operrjcDeviseComponent', () => {
  let component: operrjcDeviseComponent;
  let fixture: ComponentFixture<operrjcDeviseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ operrjcDeviseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(operrjcDeviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
