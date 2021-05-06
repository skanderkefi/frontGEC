import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminbordpeatndComponent } from './adminbordpeatnd.component';

describe('AdminbordpeatndComponent', () => {
  let component: AdminbordpeatndComponent;
  let fixture: ComponentFixture<AdminbordpeatndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminbordpeatndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminbordpeatndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
