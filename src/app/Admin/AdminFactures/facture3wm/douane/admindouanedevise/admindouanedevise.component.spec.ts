import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmindouanedeviseComponent } from './admindouanedevise.component';

describe('AdmindouanedeviseComponent', () => {
  let component: AdmindouanedeviseComponent;
  let fixture: ComponentFixture<AdmindouanedeviseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmindouanedeviseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmindouanedeviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
