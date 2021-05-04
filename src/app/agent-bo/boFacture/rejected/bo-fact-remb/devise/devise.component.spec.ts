import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { rembrjcDeviseComponent } from './devise.component';

describe('rembrjcDeviseComponent', () => {
  let component: rembrjcDeviseComponent;
  let fixture: ComponentFixture<rembrjcDeviseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ rembrjcDeviseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(rembrjcDeviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
