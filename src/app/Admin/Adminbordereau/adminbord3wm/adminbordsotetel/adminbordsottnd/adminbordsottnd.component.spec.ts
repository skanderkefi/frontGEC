import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminbordsottndComponent } from './adminbordsottnd.component';

describe('AdminbordsottndComponent', () => {
  let component: AdminbordsottndComponent;
  let fixture: ComponentFixture<AdminbordsottndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminbordsottndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminbordsottndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
