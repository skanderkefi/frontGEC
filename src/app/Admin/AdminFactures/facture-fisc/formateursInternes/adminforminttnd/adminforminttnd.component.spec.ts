import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminforminttndComponent } from './adminforminttnd.component';

describe('AdminforminttndComponent', () => {
  let component: AdminforminttndComponent;
  let fixture: ComponentFixture<AdminforminttndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminforminttndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminforminttndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
