import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminstegtndComponent } from './adminstegtnd.component';

describe('AdminstegtndComponent', () => {
  let component: AdminstegtndComponent;
  let fixture: ComponentFixture<AdminstegtndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminstegtndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminstegtndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
