import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminbordchloctndComponent } from './adminbordchloctnd.component';

describe('AdminbordchloctndComponent', () => {
  let component: AdminbordchloctndComponent;
  let fixture: ComponentFixture<AdminbordchloctndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminbordchloctndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminbordchloctndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
