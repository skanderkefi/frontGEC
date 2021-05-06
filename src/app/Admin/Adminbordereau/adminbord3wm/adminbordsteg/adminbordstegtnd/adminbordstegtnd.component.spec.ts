import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminbordstegtndComponent } from './adminbordstegtnd.component';

describe('AdminbordstegtndComponent', () => {
  let component: AdminbordstegtndComponent;
  let fixture: ComponentFixture<AdminbordstegtndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminbordstegtndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminbordstegtndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
