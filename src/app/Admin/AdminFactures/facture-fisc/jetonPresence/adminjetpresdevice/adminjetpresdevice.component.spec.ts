import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminjetpresdeviceComponent } from './adminjetpresdevice.component';

describe('AdminjetpresdeviceComponent', () => {
  let component: AdminjetpresdeviceComponent;
  let fixture: ComponentFixture<AdminjetpresdeviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminjetpresdeviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminjetpresdeviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
