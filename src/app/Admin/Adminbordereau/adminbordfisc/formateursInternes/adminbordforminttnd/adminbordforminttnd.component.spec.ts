import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminbordforminttndComponent } from './adminbordforminttnd.component';

describe('AdminbordforminttndComponent', () => {
  let component: AdminbordforminttndComponent;
  let fixture: ComponentFixture<AdminbordforminttndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminbordforminttndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminbordforminttndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
