import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminbordfintndComponent } from './adminbordfintnd.component';

describe('AdminbordfintndComponent', () => {
  let component: AdminbordfintndComponent;
  let fixture: ComponentFixture<AdminbordfintndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminbordfintndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminbordfintndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
