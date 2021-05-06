import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminbordchsoctndComponent } from './adminbordchsoctnd.component';

describe('AdminbordchsoctndComponent', () => {
  let component: AdminbordchsoctndComponent;
  let fixture: ComponentFixture<AdminbordchsoctndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminbordchsoctndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminbordchsoctndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
