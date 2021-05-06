import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminbordfdtndComponent } from './adminbordfdtnd.component';

describe('AdminbordfdtndComponent', () => {
  let component: AdminbordfdtndComponent;
  let fixture: ComponentFixture<AdminbordfdtndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminbordfdtndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminbordfdtndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
