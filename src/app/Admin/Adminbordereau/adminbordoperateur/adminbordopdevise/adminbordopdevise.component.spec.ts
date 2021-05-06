import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminbordopdeviseComponent } from './adminbordopdevise.component';

describe('AdminbordopdeviseComponent', () => {
  let component: AdminbordopdeviseComponent;
  let fixture: ComponentFixture<AdminbordopdeviseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminbordopdeviseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminbordopdeviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
