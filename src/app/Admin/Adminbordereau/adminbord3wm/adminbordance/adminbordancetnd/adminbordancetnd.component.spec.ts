import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminbordancetndComponent } from './adminbordancetnd.component';

describe('AdminbordancetndComponent', () => {
  let component: AdminbordancetndComponent;
  let fixture: ComponentFixture<AdminbordancetndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminbordancetndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminbordancetndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
