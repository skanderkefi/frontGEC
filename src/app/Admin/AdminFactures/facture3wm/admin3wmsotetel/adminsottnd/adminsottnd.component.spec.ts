import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminsottndComponent } from './adminsottnd.component';

describe('AdminsottndComponent', () => {
  let component: AdminsottndComponent;
  let fixture: ComponentFixture<AdminsottndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminsottndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminsottndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
