import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmindouanetndComponent } from './admindouanetnd.component';

describe('AdmindouanetndComponent', () => {
  let component: AdmindouanetndComponent;
  let fixture: ComponentFixture<AdmindouanetndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmindouanetndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmindouanetndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
