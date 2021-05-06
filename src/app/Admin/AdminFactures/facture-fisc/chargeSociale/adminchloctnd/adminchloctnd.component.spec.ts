import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminchsoctndComponent } from './adminchloctnd.component';

describe('AdminchsoctndComponent', () => {
  let component: AdminchsoctndComponent;
  let fixture: ComponentFixture<AdminchsoctndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminchsoctndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminchsoctndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
