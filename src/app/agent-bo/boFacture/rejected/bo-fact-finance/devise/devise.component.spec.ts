import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevisefinrjcComponent } from './devise.component';

describe('DeviseComponent', () => {
  let component: DevisefinrjcComponent;
  let fixture: ComponentFixture<DevisefinrjcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevisefinrjcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevisefinrjcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
