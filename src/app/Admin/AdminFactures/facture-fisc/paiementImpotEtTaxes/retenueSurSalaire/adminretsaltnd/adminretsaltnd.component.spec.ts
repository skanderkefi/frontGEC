import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminretsaltndComponent } from './adminretsaltnd.component';

describe('AdminretsaltndComponent', () => {
  let component: AdminretsaltndComponent;
  let fixture: ComponentFixture<AdminretsaltndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminretsaltndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminretsaltndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
