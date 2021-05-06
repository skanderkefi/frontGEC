import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminbordcmdtndComponent } from './adminbordcmdtnd.component';

describe('AdminbordcmdtndComponent', () => {
  let component: AdminbordcmdtndComponent;
  let fixture: ComponentFixture<AdminbordcmdtndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminbordcmdtndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminbordcmdtndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
