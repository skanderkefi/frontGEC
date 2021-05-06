import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminbordpittndComponent } from './adminbordpittnd.component';

describe('AdminbordpittndComponent', () => {
  let component: AdminbordpittndComponent;
  let fixture: ComponentFixture<AdminbordpittndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminbordpittndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminbordpittndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
