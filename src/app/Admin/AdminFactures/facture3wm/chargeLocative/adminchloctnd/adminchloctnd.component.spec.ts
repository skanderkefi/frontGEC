import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminchloctndComponent } from './adminchloctnd.component';

describe('AdminchloctndComponent', () => {
  let component: AdminchloctndComponent;
  let fixture: ComponentFixture<AdminchloctndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminchloctndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminchloctndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
