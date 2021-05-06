import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminfactventtndComponent } from './adminfactventtnd.component';

describe('AdminfactventtndComponent', () => {
  let component: AdminfactventtndComponent;
  let fixture: ComponentFixture<AdminfactventtndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminfactventtndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminfactventtndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
