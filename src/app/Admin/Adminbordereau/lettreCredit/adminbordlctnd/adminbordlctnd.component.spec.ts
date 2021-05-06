import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminbordlctndComponent } from './adminbordlctnd.component';

describe('AdminbordlctndComponent', () => {
  let component: AdminbordlctndComponent;
  let fixture: ComponentFixture<AdminbordlctndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminbordlctndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminbordlctndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
