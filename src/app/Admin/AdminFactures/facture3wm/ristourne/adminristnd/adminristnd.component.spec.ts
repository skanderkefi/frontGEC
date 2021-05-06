import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminristndComponent } from './adminristnd.component';

describe('AdminristndComponent', () => {
  let component: AdminristndComponent;
  let fixture: ComponentFixture<AdminristndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminristndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminristndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
