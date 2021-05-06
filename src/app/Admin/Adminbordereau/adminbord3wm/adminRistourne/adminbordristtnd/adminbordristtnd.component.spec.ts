import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminbordristtndComponent } from './adminbordristtnd.component';

describe('AdminbordristtndComponent', () => {
  let component: AdminbordristtndComponent;
  let fixture: ComponentFixture<AdminbordristtndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminbordristtndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminbordristtndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
