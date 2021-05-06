import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminpeatndComponent } from './adminpeatnd.component';

describe('AdminpeatndComponent', () => {
  let component: AdminpeatndComponent;
  let fixture: ComponentFixture<AdminpeatndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminpeatndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminpeatndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
