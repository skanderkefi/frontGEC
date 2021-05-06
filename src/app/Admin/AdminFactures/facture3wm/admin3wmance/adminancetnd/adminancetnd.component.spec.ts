import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminancetndComponent } from './adminancetnd.component';

describe('AdminancetndComponent', () => {
  let component: AdminancetndComponent;
  let fixture: ComponentFixture<AdminancetndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminancetndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminancetndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
