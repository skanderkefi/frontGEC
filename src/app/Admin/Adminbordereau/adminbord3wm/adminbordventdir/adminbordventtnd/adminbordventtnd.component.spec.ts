import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminbordventtndComponent } from './adminbordventtnd.component';

describe('AdminbordventtndComponent', () => {
  let component: AdminbordventtndComponent;
  let fixture: ComponentFixture<AdminbordventtndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminbordventtndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminbordventtndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
