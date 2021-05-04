import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Devise3wmstegrjcComponent } from './devise.component';

describe('DeviseComponent', () => {
  let component: Devise3wmstegrjcComponent;
  let fixture: ComponentFixture<Devise3wmstegrjcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Devise3wmstegrjcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Devise3wmstegrjcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
