import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminbordoptndComponent } from './adminbordoptnd.component';

describe('AdminbordoptndComponent', () => {
  let component: AdminbordoptndComponent;
  let fixture: ComponentFixture<AdminbordoptndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminbordoptndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminbordoptndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
