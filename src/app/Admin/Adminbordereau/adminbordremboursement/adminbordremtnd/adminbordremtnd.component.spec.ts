import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminbordremtndComponent } from './adminbordremtnd.component';

describe('AdminbordremtndComponent', () => {
  let component: AdminbordremtndComponent;
  let fixture: ComponentFixture<AdminbordremtndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminbordremtndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminbordremtndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
