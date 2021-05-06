import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminpittndComponent } from './adminpittnd.component';

describe('AdminpittndComponent', () => {
  let component: AdminpittndComponent;
  let fixture: ComponentFixture<AdminpittndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminpittndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminpittndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
