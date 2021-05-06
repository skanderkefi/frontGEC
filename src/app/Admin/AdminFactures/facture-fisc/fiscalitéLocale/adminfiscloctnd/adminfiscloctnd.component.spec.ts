import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminfiscloctndComponent } from './adminfiscloctnd.component';

describe('AdminfiscloctndComponent', () => {
  let component: AdminfiscloctndComponent;
  let fixture: ComponentFixture<AdminfiscloctndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminfiscloctndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminfiscloctndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
