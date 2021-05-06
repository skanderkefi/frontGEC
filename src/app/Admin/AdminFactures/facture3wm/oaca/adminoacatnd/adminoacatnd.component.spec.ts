import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminoacatndComponent } from './adminoacatnd.component';

describe('AdminoacatndComponent', () => {
  let component: AdminoacatndComponent;
  let fixture: ComponentFixture<AdminoacatndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminoacatndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminoacatndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
