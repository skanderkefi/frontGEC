import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminborddouanetndComponent } from './adminborddouanetnd.component';

describe('AdminborddouanetndComponent', () => {
  let component: AdminborddouanetndComponent;
  let fixture: ComponentFixture<AdminborddouanetndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminborddouanetndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminborddouanetndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
