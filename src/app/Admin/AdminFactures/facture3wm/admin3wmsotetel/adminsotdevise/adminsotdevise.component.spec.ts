import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminsotdeviseComponent } from './adminsotdevise.component';

describe('AdminsotdeviseComponent', () => {
  let component: AdminsotdeviseComponent;
  let fixture: ComponentFixture<AdminsotdeviseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminsotdeviseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminsotdeviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
