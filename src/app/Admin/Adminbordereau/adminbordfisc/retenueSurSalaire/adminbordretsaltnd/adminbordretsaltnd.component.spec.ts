import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminbordretsaltndComponent } from './adminbordretsaltnd.component';

describe('AdminbordretsaltndComponent', () => {
  let component: AdminbordretsaltndComponent;
  let fixture: ComponentFixture<AdminbordretsaltndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminbordretsaltndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminbordretsaltndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
