import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminbordremdeviseComponent } from './adminbordremdevise.component';

describe('AdminbordremdeviseComponent', () => {
  let component: AdminbordremdeviseComponent;
  let fixture: ComponentFixture<AdminbordremdeviseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminbordremdeviseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminbordremdeviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
